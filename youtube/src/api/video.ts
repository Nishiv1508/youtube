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