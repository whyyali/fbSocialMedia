import ProfileBottomSection from "../../components/profile/profileBottomSection/ProfileBottomSection";
import ProfileTopSection from "../../components/profile/profileTopSection/ProfileTopSection";
import Topbar from "../../components/topbar/Topbar";
import "./profile.scss";

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <div className="profileContainer">
                    <ProfileTopSection />
                    <ProfileBottomSection />
                </div>
            </div>
        </>
    )
}

export default Profile
