import { useState } from "react";
import FileUpload from "../components/FileUpload";
import { Input } from "../components/ui/input";
import useThumbnail from "../hooks/useThumbnail";

export default function UploadVideo(){
    const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
    
      const { mutate, isPending } = useThumbnail();
    
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

    return (
        <>
        <h1 className="text-3xl mb-16">Upload Your Video</h1>
        <form className="flex flex-col gap-2 justify-center w-3xl m-auto">
                Enter Title: <Input type="text" />
                Enter Description: <Input type="textarea" />
                Enter Category: <Input type="text" />
                <FileUpload title={"Picture"} isPending={isPending} handleChange={handleImageChange} handleClick={handleImageClick} />
                {/* <FileUpload title={"Video"} /> */}
        </form>
        </>
    )
}