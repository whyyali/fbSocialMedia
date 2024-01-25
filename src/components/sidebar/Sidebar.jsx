import { SidebarData , PostData } from "../../../tempData";
import "./sidebar.scss";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    {SidebarData.map((link) => (
                        <div className="sidebarListItem" key={link.name}>
                            <img src={link.icon} alt="" className="sidebarListIcon"/>
                            <li className="sidebarListText">{link.name}</li>
                        </div>
                    ))}
                </ul>
                <button className="sidebarButton">show more</button>
                <hr />
                <ul className="sidebarFriendList">
                    {PostData.map((friend) => (
                        <li className="sidebarFriendListItems" key={friend.id}>
                            <img src={friend.userProfileImage} alt="" className="sidebarFriendImage" />
                            <span className="sidebarFriendName">{friend.username}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar