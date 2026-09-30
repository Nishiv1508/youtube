import type { auth } from "../interfaces/auth";
import { api } from "./axios";

export const login = (payload: auth)=>{
    return api.post("/auth/login", payload);
}

export const logout = ()=>{
    return api.post("/auth/logout", {refreshToken: localStorage.getItem("refreshToken")});
}