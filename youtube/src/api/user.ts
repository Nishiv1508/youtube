import { api } from "./axios"

export const getProfile = ()=>{
    return api.get("/users/me")
}