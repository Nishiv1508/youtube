import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getRecommendedVideo } from "../api/video";

export default function useRecommendedVideo(id: string){
    const query = useQuery({
        queryKey: ["videoRecommended", id],
        queryFn: async()=>{
            const res = getRecommendedVideo(id);
            return res;
        },
        placeholderData: keepPreviousData
    })

    return query;
}