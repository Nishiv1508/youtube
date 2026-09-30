import type { AxiosResponse } from "axios";
import VideoCard from "./VideoCard";
import type { UseQueryResult } from "@tanstack/react-query";
import type { videoInterface } from "../interfaces/videoInterface";

export default function VideoPannel({videoData, handleClick}: {videoData: UseQueryResult<AxiosResponse<any, any, {}, any>, Error>, handleClick: (id: string) => void}){

    const {data, isLoading} = videoData;
    return (
        <div className="flex flex-wrap gap-7 mt-4">
            {isLoading? (<p>Loading</p>) : (
                data?.data.data.map((video: videoInterface)=>{
                    return <VideoCard key={video.id} data={video} handleClick={handleClick} />
                })
            )}
        </div>
    )
}