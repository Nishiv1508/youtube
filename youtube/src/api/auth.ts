import type { auth } from "../interfaces/auth";
import { api } from "./axios";

export const login = (payload: auth)=>{
    return api.post("/auth/login", payload);
}