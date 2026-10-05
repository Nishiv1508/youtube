import type { PartResponse, UploadResponse } from "../interfaces/UploadResponse";
import { api } from "./axios";

export const getVideos = (count: number)=>{
    return api.get(`/videos?page=${count}&limit=20&sort=recent`);
}

export const videoDetail = (id: string)=>{
    return api.get(`/videos/${id}`);
}

export const getRecommendedVideo = (id: string)=>{
    return api.get(`/videos/${id}/recommended?limit=10`);
}

export const getSearchVideos = (search: string)=>{
    return api.get(`/videos?page=1&limit=20&sort=recent&search=${search}`);
}

export const videoUploadResponse = async(payload: UploadResponse)=>{
    return api.post("https://yt-assesment.onrender.com/api/v1/uploads/videos/initiate", payload);
}

export const videoUploadPartResponse = async(uploadId: string, payload: PartResponse)=>{
    return api.post(`https://yt-assesment.onrender.com/api/v1/uploads/videos/${uploadId}/parts/presign`, payload);
}

export const videoUploadPartList = async(uploadId: string)=>{
    return api.get(`https://yt-assesment.onrender.com/api/v1/uploads/videos/${uploadId}/parts`);
}

export const videoCompleteUploadResponse = async(uploadId: string, payload: {})=>{
    return api.post(`https://yt-assesment.onrender.com/api/v1/uploads/videos/${uploadId}/complete`, payload);
}