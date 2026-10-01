import VideoCard from "../components/VideoCard";
import type { videoInterface } from "../interfaces/videoInterface";
import { useNavigate, useParams } from "react-router";
import useSearch from "../hooks/useSearch";

export default function SearchPage() {
    const {search} = useParams();
    if(!search){
        return <p>No results Found :(</p>
    }
    const { data, isLoading } = useSearch(search);
    const navigate = useNavigate();

    const handleClick = (id: string)=>{
        navigate(`/video/${id}`);
    }

    return (<>
    <div className="flex flex-wrap gap-x-2 gap-y-6">
        {isLoading ? (<p>Loading...</p>) : (

            data &&
            data.data.data.map((vd: videoInterface) => {
                return <VideoCard key={vd.id} data={vd} handleClick={handleClick} />
            })
        )}
    </div>
    </>)
}