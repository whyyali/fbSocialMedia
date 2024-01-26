import SideCardHeader from "../../sidecardheader/SideCardHeader";
import "./photocard.scss";

const PhotoCard = (props) => {
  const { postedPhotos } = props;
  console.log(postedPhotos);
  return (
    <div className="sideCardBodyPhoto">
      <SideCardHeader heading="Photos" topBtn="See all photos" />
      <div className="sideCardForPhotos">
        <img src="/post/1.jpeg" alt="" className="sideCardForPhoto" />
        <img src="/post/1.jpeg" alt="" className="sideCardForPhoto" />
        <img src="/post/1.jpeg" alt="" className="sideCardForPhoto" />
        <img src="/post/1.jpeg" alt="" className="sideCardForPhoto" />
        <img src="/post/1.jpeg" alt="" className="sideCardForPhoto" />
        <img src="/post/1.jpeg" alt="" className="sideCardForPhoto" />
        <img src="/post/1.jpeg" alt="" className="sideCardForPhoto" />
        <img src="/post/1.jpeg" alt="" className="sideCardForPhoto" />
        <img src="/post/1.jpeg" alt="" className="sideCardForPhoto" />
      </div>
    </div>
  )
}

export default PhotoCard
