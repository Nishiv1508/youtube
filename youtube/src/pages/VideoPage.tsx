import { useNavigate, useParams } from "react-router";
import VideoPlayer from "../components/VideoPlayer";
import useVideoById from "../hooks/useVideoById";
import { VideoDetails } from "../components/VideoDetails";
import useRecommendedVideo from "../hooks/useRecommendedVideo";
import VideoPannel from "../components/VideoPannel";
import { useEffect, useState } from "react";

export default function VideoPage() {
    const { id } = useParams();
    const [miniplayer, setMiniplayer] = useState(false);
    const navigate = useNavigate();


    if (!id) {
        return <p>Something went wrong</p>
    }
    const { data, isLoading } = useVideoById(id);
    const query = useRecommendedVideo(id);
    const handleClick = (id: string) => {
        navigate(`/video/${id}`);
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'i') {
                setMiniplayer(true);
                navigate("/homepage");
            }
        };  
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            {isLoading ?
                (<p>Loading...</p>) :
                (
                    <>
                        <div className="flex flex-col gap-4">
                            <VideoPlayer videoKey={data?.data.data.videoKey} miniplayer={miniplayer} />
                            <VideoDetails data={data?.data.data} />
                        </div>

                        <div className="flex flex-col mt-7">
                            <div className="text-3xl">Recommended Videos</div>
                            <VideoPannel videoData={query} handleClick={handleClick} />
                        </div>
                    </>
                )
            }

        </div>
    )
} 