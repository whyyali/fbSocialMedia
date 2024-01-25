import {AddCircle} from "@mui/icons-material";
import { PostData } from "../../../tempData";
import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
       <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="/gift.png" alt="" className="birthdayImage" />
             <span className="birthdayText">
              <b>Jessica</b> and <b>2 other friends</b> have a birthday today.
             </span>
          </div>
          <hr className="rightbarHr" />
          <div className="rightbarFreindRequestList">
              <div className="rightbarFriendRequestHeader">
                   <h2 className="righbarHeading">Friend Requests</h2>
                  <span className="rightbarAllFriendRequestList">See All</span>
              </div>
              <div className="rightbarFriendId">
                   <img src="/person/9.jpeg" alt="" className="rightbarRequestImage" />
                   <div className="rightbarRequestIdDetails">
                      <h2 className="rightbarRequestUsername">Rimsha Malik</h2>
                      <div className="rightbarRequestMutualFriendBox">
                        <img src="/person/girl2.png" alt="" className="requestIdMutualFriendImage" />
                        <span className="requestIdMutualFriendText">1 mutual friend</span>
                      </div>
                      <div className="requestConfirmationButtons">
                           <button className="rightbarButton" style={{backgroundColor: "#3887BE", color: "#fff"}}>Confirm</button>
                           <button className="rightbarButton">Delete</button>
                      </div>
                   </div>
              </div>
          </div>
          <hr className="rightbarHr" />
          <div className="rightbarGroupCreation">
             <h2 className="rightbarGroupHeading">Group Conversations</h2>
             <div className="rightbarGroup">
                <span className="rightbarGroupIcon"><AddCircle fontSize="25px"/></span>
                <span className="rightbarGroupText">Create New Group</span>
             </div>
          </div>
          <hr className="rightbarHr" />
          <h3 className="rightbarTitle">Online Friends</h3>
          <ul className="rightbarFriendList">
            {PostData.map((data) => (
               <li className="rightbarFriend" key={data.id}>
               <div className="rightbarProfileImageContainer">
                 <img src={data.userProfileImage} alt="" className="rightbarProfileImage" />
                 <span className="rightbarOnline"></span>
               </div>
               <span className="rightbarUsername">{data.username}</span>
             </li>
            ))}
          </ul>
       </div>
    </div>
  )
}

export default Rightbar
