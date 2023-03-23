import ProfileHeader from "./ProfileHeader";
import ImageUpload from "./ImageUpload";
import GridView from "./GridView";
import { handleImageUpload } from "../utils/helpers";
import { useQuery } from '@apollo/client';
import { PROFILE_DATA } from '../graphql/query'
import { useState } from "react";


const Profile = () => {
    const { data, loading, error } = useQuery(PROFILE_DATA)!;
    const [profileUpdate, setProfileUpdate] = useState(false);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const toggleProfileUpdate = () => {
        setProfileUpdate(!profileUpdate);
        console.log('Profile Update...')
    };

    return (
        <div className="profile">
            <ProfileHeader username={data.userInfo.username} totalPictures={data.userInfo.totalPictures} toggleProfileUpdate={toggleProfileUpdate} />
            <ImageUpload onUpload={handleImageUpload} toggleProfileUpdate={toggleProfileUpdate} />
            <GridView images={data.imagesByUser} toggleProfileUpdate={toggleProfileUpdate} />
        </div>
    );
};



export default Profile;