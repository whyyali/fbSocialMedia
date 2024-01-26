import SideCardHeader from "../../sidecardheader/SideCardHeader";
import "./friendcard.scss";

const FriendCard = () => {
  return (
    <div className="sideCardBodyFriend">
       <SideCardHeader heading="Friends" topBtn="See all friends"/>
       <div className="sideCardFriendContainer">
             <div className="sideCardFriendContainerItems">
                <img src="/person/girl2.png" alt="" className="sideCardFriendImage" />
                <span className="sideCardFriendText">Ayesha</span>
             </div>
             <div className="sideCardFriendContainerItems">
                <img src="/person/1.jpeg" alt="" className="sideCardFriendImage" />
                <span className="sideCardFriendText">Noor</span>
             </div>
       </div>
    </div>
  )
}

export default FriendCard
