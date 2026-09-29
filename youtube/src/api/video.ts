import { api } from "./axios";

export const getVideos = (count: number)=>{
    return api.get(`/videos?page=${count}&limit=20&sort=recent`);
}