import { useMutation } from "@tanstack/react-query";
import { s3Video } from "../api/s3";
import axios from "axios";
import type { VideoUpload } from "../interfaces/VideoUpload";

type UploadPayload = VideoUpload & {
  file: File;
};

export default function useVideoUpload() {
  return useMutation({
    mutationFn: async ({ file, ...video }: UploadPayload) => {
      const res = await s3Video(video);
      const url = res.data.data.url;
      const key = res.data.data.key;
      const response = await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      return {response, key};
    },

    onSuccess: () => {
      alert("Image Uploaded");
    },

  });
}
