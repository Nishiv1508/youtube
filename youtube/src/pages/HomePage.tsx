import { useState } from "react";
import { PaginationComponent } from "../components/PaginationComponent";
import VideoCard from "../components/VideoCard";
import useVideo from "../hooks/useVideo"
import type { videoInterface } from "../interfaces/videoInterface";

export default function HomePage() {
    const [count, setCount] = useState(1);
    const { data, isLoading } = useVideo(count);

    const handleIncrease = ()=>{
        if(count<4){
            setCount((c)=>c+1);
        }
    }

    const handleDecrease = ()=>{
        if(count>1){
            setCount((c)=>c-1);
        }
    }

    return (<>
    <div className="flex flex-wrap gap-x-2 gap-y-6">
        {isLoading ? (<p>Loading...</p>) : (

            data &&
            data.data.data.map((vd: videoInterface) => {
                return <VideoCard key={vd.id} data={vd} />
            })
        )}
    </div>

    <div>
        <PaginationComponent decrease={handleDecrease} increase={handleIncrease} />
    </div>
    </>)
}