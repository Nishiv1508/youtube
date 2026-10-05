import type { uploadForm } from "../interfaces/uploadForm";
import { api } from "./axios"

export const upload = (payload: uploadForm)=>{
    return api.post("/videos", payload);
}