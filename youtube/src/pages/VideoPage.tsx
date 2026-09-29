import { useNavigate, useParams } from "react-router";
import VideoPlayer from "../components/VideoPlayer";
import useVideoById from "../hooks/useVideoById";
import { VideoDetails } from "../components/VideoDetails";
import useRecommendedVideo from "../hooks/useRecommendedVideo";
import VideoPannel from "../components/VideoPannel";

export default function VideoPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    if (!id) {
        return <p>Something went wrong</p>
    }
    const { data, isLoading } = useVideoById(id);
    const query = useRecommendedVideo(id);
    const handleClick = (id: string) => {
        navigate(`/video/${id}`);
    }
    return (
        <div>
            {isLoading ?
                (<p>Loading...</p>) :
                (
                    <>
                        <div className="flex flex-col gap-4">
                            <VideoPlayer videoKey={data?.data.data.videoKey} />
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