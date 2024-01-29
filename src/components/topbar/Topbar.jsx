import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import "./topbar.scss";
import Profile from '../../pages/profile/Profile';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">
          <span>Facebook</span>
        </div>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className='searchBarIcon' />
          <input type="text" placeholder="Search your friend, photo or vedio ..." className="searchBarInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to="/profile">
          <img src="/person/girl.jpg" alt="" className='topbarProfileImage' />
        </Link>
      </div>
    </div>
  )
}

export default Topbar
