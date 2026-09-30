import type { Thumbnail } from "../interfaces/thumbnail";
import type { VideoUpload } from "../interfaces/VideoUpload";
import { api } from "./axios";

export const s3Thumbnail = async(payload: Thumbnail)=>{
    return api.post("/uploads/thumbnails/presign", payload);
}

export const s3Video = async(payload: VideoUpload)=>{
    return api.post("/uploads/video/initiate", payload);
}