import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material';
import "./sidebar.scss";

const Sidebar = () => {

    const sidebarLinks = [
        {
            name: "Feed",
            icon: <RssFeed />,
        },
        {
            name: "Chats",
            icon: <Chat />,
        },
        {
            name: "Vedioes",
            icon: <PlayCircleFilledOutlined />,
        },
        {
            name: "Groups",
            icon: <Group />,
        },
        {
            name: "Bookmarks",
            icon: <Bookmark />,
        },
        {
            name: "Questions",
            icon: <HelpOutline />,
        },
        {
            name: "Jobs",
            icon: <WorkOutline />,
        },
        {
            name: "Events",
            icon: <Event />,
        },
        {
            name: "Courses",
            icon: <School />,
        },
    ]

    const sidebarFriends = [
        {
            name: "Hina Malik",
            img: "/person/1.jpeg",
        },
        {
            name: "Jone Lim",
            img: "/person/2.jpeg",
        },
        {
            name: "Beauty Queen",
            img: "/person/3.jpeg",
        },
        {
            name: "Mahnoor Ali",
            img: "/person/4.jpeg",
        },
        {
            name: "Lisa lo",
            img: "/person/5.jpeg",
        },
        {
            name: "Jinne kim",
            img: "/person/6.jpeg",
        },
        {
            name: "Faizan Khan",
            img: "/person/7.jpeg",
        },
        {
            name: "Sana Fatima",
            img: "/person/8.jpeg",
        },
        {
            name: "Yeshfeen Roy",
            img: "/person/9.jpeg",
        },
    ]

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    {sidebarLinks.map((link) => (
                        <div className="sidebarListItem" key={link.name}>
                            <span>{link.icon}</span>
                            <li>{link.name}</li>
                        </div>
                    ))}
                </ul>
                <button className="sidebarButton">show more</button>
                <hr />
                <ul className="sidebarFriendList">
                    {sidebarFriends.map((friend) => (
                        <li className="sidebarFriendListItems" key={friend.name}>
                            <img src={friend.img} alt="" className="sidebarFriendImage" />
                            <span className="sidebarFriendName">{friend.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar