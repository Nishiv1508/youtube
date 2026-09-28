import { useMutation } from "@tanstack/react-query";
import type { auth } from "../interfaces/auth";
import { login } from "../api/auth";
import { useNavigate } from "react-router";

export default function useLogin(){
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: async(payload: auth)=>{
            const res = login(payload);
            return res;
        },
        onSuccess: (res)=>{
            console.log(res)
            localStorage.setItem("accessToken", res.data.data.accessToken)
            localStorage.setItem("refreshToken", res.data.data.refreshToken)
            navigate("/homepage");
        }
    })

    return mutation;
}