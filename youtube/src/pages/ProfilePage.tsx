import { ProfileCard } from "../components/ProfileCard";
import useProfile from "../hooks/useProfile"

export default function ProfilePage(){

    const {data, isLoading} = useProfile();
    return (
        <>
            {isLoading? (<p>Loading...</p>) : (
                <div>
                    <ProfileCard data={data?.data.data} />
                </div>
            )}
        </>
    )
}