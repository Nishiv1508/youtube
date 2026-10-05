import { useMutation } from "@tanstack/react-query";
import type { Thumbnail } from "../interfaces/thumbnail";
import { s3Thumbnail } from "../api/s3";
import axios from "axios";

type UploadPayload = Thumbnail & {
  file: File;
};

export default function useThumbnail(setImageURL: React.Dispatch<React.SetStateAction<string>>) {
  return useMutation({
    mutationFn: async ({ file, ...thumbnail }: UploadPayload) => {
      const res = await s3Thumbnail(thumbnail);
      const url: string = res.data.data.url;
      const key: string = res.data.data.key;
      const response = await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      return {response, key};
    },

    onSuccess: (data) => {
      setImageURL(data.key);
      alert("Image Uploaded");
    },

    onError: ()=>{
      alert("Failed Uploading Image")
    }

  });
}
