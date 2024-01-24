import {MoreVert, ThumbUp, Comment, Share } from "@mui/icons-material";
import "./post.scss";

const Post = (props) => {
    const {post,userProfileImage, time, username, caption} = props;
  return (
    <div className="post">
       <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={userProfileImage} alt="" className="postProfileImage" />
                    <span className="postUsername">{username}</span>
                    <span className="postDate">{time}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{caption}</span>
                <img src={post} alt="" className="postImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="./like.png" alt="" className="likeIcon" />
                    <img src="./heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">30 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postBottomComment">9 comments</span>
                </div>
            </div>
            <hr className="postBottomHr" />
            <div className="postBottomButtons">
                    <div className="postBottomButton">
                        <ThumbUp className="postButtonImage" />
                        <span className="postButton">Like</span>
                    </div>
                    <div className="postBottomButton">
                        <Comment className="postButtonImage" />
                        <span className="postButton">Comment</span>
                    </div>
                    <div className="postBottomButton">
                        <Share  className="postButtonImage" />
                        <span className="postButton">Share</span>
                    </div>
                </div>
       </div>
    </div>
  )
}

export default Post
