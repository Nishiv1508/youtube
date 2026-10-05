import { useState } from "react";
import FileUpload from "../components/FileUpload";
import { Input } from "../components/ui/input";
import useThumbnail from "../hooks/useThumbnail";
import VideoUploadFile from "../components/VideoUploadFile";
import { videoCompleteUploadResponse, videoUploadPartResponse, videoUploadResponse } from "../api/video";
import axios from "axios";
import useUpload from "../hooks/useUpload";

export default function UploadVideo() {
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("OTHER");

  const { mutate, isPending } = useThumbnail(setImageURL);
  const mutation = useUpload();

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setSelectedImageFile(file);
  }

  function handleImageClick() {
    if (!selectedImageFile) {
      alert("Select a file");
      return;
    }

    mutate({
      file: selectedImageFile,
      fileName: selectedImageFile.name,
      contentType: selectedImageFile.type,
    });
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (!file) {
      return alert("Video field is empty");
    }

    try {
      const fileName = file.name;
      const fileType = file.type;
      const fileSize = file.size;

      const startUploadResponse = await videoUploadResponse({
        fileName,
        fileSize,
        contentType: fileType,
      });

      const {
        uploadId,
        totalParts,
        partSize,
      } = startUploadResponse.data.data;

      const partNumbers = Array.from(
        { length: totalParts },
        (_, index) => index + 1
      );

      const startVideoPart = await videoUploadPartResponse(uploadId, {
        partNumbers,
      });

      const uploadUrls = startVideoPart.data.data;

      const uploadedParts = await Promise.all(
        uploadUrls.map(
          async (
            part: {
              partNumber: number;
              url: string;
            }
          ) => {
            const partNumber = part.partNumber;

            const start = (partNumber - 1) * partSize;
            const end = Math.min(start + partSize, file.size);

            const chunk = file.slice(start, end);

            const response = await axios.put(part.url, chunk, {
              headers: {
                "Content-Type": file.type,
              },
            });

            return {
              partNumber,
              eTag: response.headers.etag,
            };
          }
        )
      );

      const parts = uploadedParts
        .sort((a, b) => a.partNumber - b.partNumber)
        .map((part) => ({
          partNumber: part.partNumber,
          eTag: part.eTag,
        }));

      const completeUploadResponse = await videoCompleteUploadResponse(
        uploadId,
        {
          parts,
        }
      );

      const videoKey = completeUploadResponse.data.data.videoKey;

      setFileUrl(videoKey);

      alert("Video uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Video upload failed");
    }
  };

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate({
      title,
      description: desc,
      category: category,
      videoKey: fileUrl,
      thumbnailKey: imageURL,
    })
  }

  return (
    <>
      <h1 className="text-3xl mb-16">Upload Your Video</h1>
      <form className="flex flex-col gap-2 justify-center w-3xl m-auto" onSubmit={(e) => handleSubmit(e)}>
        Enter Title: <Input type="text" onChange={(e) => setTitle(e.target.value)} required />
        Enter Description: <Input type="textarea" onChange={(e) => setDesc(e.target.value)} required />
        <div className="flex flex-col gap-2">
          <label className="font-medium">Select Category:</label>

          <div className="flex flex-wrap gap-4">
            {[
              "MUSIC",
              "GAMING",
              "EDUCATION",
              "ENTERTAINMENT",
              "SPORTS",
              "TECHNOLOGY",
              "NEWS",
              "OTHER",
            ].map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value={option}
                  checked={category === option}
                  onChange={(e) => setCategory(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <FileUpload title={"Picture"} isPending={isPending} handleChange={handleImageChange} handleClick={handleImageClick} />
        <VideoUploadFile file={file} handleFileChange={handleFileChange} handleFileUpload={handleFileUpload} />
        <input type="submit" className="bg-black text-white mt-3" />
      </form>
    </>
  )
}