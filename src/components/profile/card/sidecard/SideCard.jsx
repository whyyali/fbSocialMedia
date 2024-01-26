import "./sidecard.scss";
import BioCard from "./sidecardbody/biocard/BioCard";
import FriendCard from "./sidecardbody/friendcard/FriendCard";
import PhotoCard from "./sidecardbody/photocard/PhotoCard";

const SideCard = () => {
  return (
    <div className="sideCard">
      <div className="profileSideCard">
       <BioCard headingBio="All the Best" editBio="Edit Bio" editDetails="Edit Details" editFeatured="Edit Features" />
      <PhotoCard />
      <FriendCard />
      </div>
    </div>
  )
}

export default SideCard
