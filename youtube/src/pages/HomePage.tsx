import { useState } from "react";
import { PaginationComponent } from "../components/PaginationComponent";
import VideoCard from "../components/VideoCard";
import useVideo from "../hooks/useVideo"
import type { videoInterface } from "../interfaces/videoInterface";
import { useNavigate } from "react-router";

export default function HomePage() {
    const [count, setCount] = useState(1);
    const { data, isLoading } = useVideo(count);
    const navigate = useNavigate();

    const handleIncrease = () => {
        if (count < 4) {
            setCount((c) => c + 1);
        }
    }

    const handleDecrease = () => {
        if (count > 1) {
            setCount((c) => c - 1);
        }
    }

    const handleClick = (id: string) => {
        navigate(`/video/${id}`);
    }

    return (
        <>
            {isLoading ? <p>Loading...</p> : (
                <>
                    <div className="flex flex-wrap gap-x-2 gap-y-6">

                        {data &&
                            data.data.data.map((vd: videoInterface) => {
                                return <VideoCard key={vd.id} data={vd} handleClick={handleClick} />
                            })}
                    </div>
                    <PaginationComponent decrease={handleDecrease} increase={handleIncrease} count={count} />
                </>

            )}
        </>
    )
}