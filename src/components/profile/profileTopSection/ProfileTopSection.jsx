import FriendSuggestionList from "../list/friendSuggestionList/FriendSuggestionList";
import OptionsList from "../list/optionsList/OptionsList";
import ProfileCover from "../profileCover/ProfileCover";
import "./profiletopsection.scss";

const ProfileTopSection = () => {
    return (
        <div className="profileTop">
            <ProfileCover />
            <FriendSuggestionList />
            <hr className="profileTopBottomHr" />
            <OptionsList />
        </div>
    )
}

export default ProfileTopSection
