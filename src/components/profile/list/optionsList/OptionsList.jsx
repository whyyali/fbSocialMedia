import {MoreHoriz} from "@mui/icons-material"
import "./optionslist.scss";

const OptionsList = () => {
  return (
    <div className="profileList">
        <div className="profileListItems">
            <span className="profileListItem active">Posts</span>
            <span className="profileListItem">About</span>
            <span className="profileListItem">Friends</span>
            <span className="profileListItem">Photos</span>
            <span className="profileListItem">Videos</span>
            <span className="profileListItem">Reels</span>
            <span className="profileListItem">More</span>
        </div>
        <span className="moreHorizontal"><MoreHoriz /></span>
    </div>
  )
}

export default OptionsList;
