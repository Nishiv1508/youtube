import { useQuery } from "@tanstack/react-query";
import { getVideos } from "../api/video";

export default function useVideo(page: number){
    const query = useQuery({
        queryKey: ["video", page],
        queryFn: async()=>{
            const res = getVideos(page);
            return res;
        }
    })

    return query;
}