import Post from "../post/Post";
import Share from "../share/Share";
import Story from "../story/Story";
import { PostData } from "../../../tempData";
import "./feed.scss";

const Feed = () => {
  const PostedByAscOrder = PostData.sort((a, b) => a.asc - b.asc);
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Story />
        <Share />
        {PostedByAscOrder.map((data) => (
          <div key={data.id}>
            <Post post={data.post} userProfileImage={data.userProfileImage} username={data.username} caption={data.caption} time={data.time}
              liked={data.like} comment={data.comment}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed
