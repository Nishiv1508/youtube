import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getSearchVideos } from "../api/video";

export default function useSearch(search: string){
    const query = useQuery({
        queryKey: ["videoSearch", search],
        queryFn: async()=>{
            const res = getSearchVideos(search);
            return res;
        },
        placeholderData: keepPreviousData
    })

    return query;
}