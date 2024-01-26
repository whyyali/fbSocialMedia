import { PostData } from "../../../../../tempData";
import "./friendsuggestionlist.scss";

const FriendSuggestionList = () => {
  return (
    <div className="addNewFriend">
      <div className="addNewFriendCard">
        <div className="addNewFriendCardHeader">
          <h2 className="addNewFriendCardText">People you may know</h2>
          <span className="addNewFriendCardSeeAll">See All</span>
        </div>
        <div className="addNewFriendCardBody">
          <div className="addNewFriendCardList">
            {PostData.map((data) => (
              <div className="addNewFriendCardListData" key={data.id}>
                <img src={data.userProfileImage} alt="" className="addNewFriendCardListImage" />
                <span className="addNewFriendCardListUsername">{data.username}</span>
                <div className="addNewFriendCardListButton">
                  <span className="addNewFriendCardButtonImage">+</span>
                  <span className="addNewFriendCardButtonText">Add friend</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendSuggestionList;
