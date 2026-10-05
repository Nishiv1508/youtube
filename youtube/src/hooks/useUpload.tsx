import { useMutation } from "@tanstack/react-query";
import type { uploadForm } from "../interfaces/uploadForm";
import { upload } from "../api/upload";

export default function useUpload(){
    const mutation = useMutation({
        mutationFn: async(payload: uploadForm)=>{
            const res = upload(payload);
            return res;
        },
        onSuccess: ()=>{
            alert("Submitted");
        }
    })

    return mutation;
}