import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/user";

export default function useProfile(){
    const query = useQuery({
        queryKey: ["profile"],
        queryFn: async()=>{
            const res = getProfile();
            return res;
        }
    })

    return query;
}