import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { videoDetail } from "../api/video";

export default function useVideoById(id: string){
    const query = useQuery({
        queryKey: ["videoIndividual", id],
        queryFn: async()=>{
            const res = videoDetail(id);
            return res;
        },
        placeholderData: keepPreviousData
    })

    return query;
}