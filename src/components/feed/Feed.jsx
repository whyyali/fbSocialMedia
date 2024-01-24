import Post from "../post/Post";
import Share from "../share/Share";
import Story from "../story/Story";
import "./feed.scss";

const Feed = () => {
  const tempDataForPost =[
    {
        post: "/post/1.jpeg",
        userProfileImage: "person/boy.png",
        username: "Zain",
        caption: "Hey! Its my first Post ❤",
        time: "5 min ago", 
    },
    {
        post: "/post/2.jpeg",
        userProfileImage: "person/1.jpeg",
        username: "Hina",
        caption: "yammy",
        time: "55 min ago",
    },
    {
        post: "/post/3.jpeg",
        userProfileImage: "person/2.jpeg",
        username: "Jone",
        caption: "Nice View 😍",
        time: "2 hours ago",
    },
    {
        post: "/post/4.jpeg",
        userProfileImage: "person/3.jpeg",
        username: "Beauty",
        caption: "Orange",
        time: "1 hours ago",
    },
    {
        post: "/post/5.jpeg",
        userProfileImage: "person/4.jpeg",
        username: "Mahnoor",
        caption: "Amazing",
        time: "20 hours ago",
    },
    {
        post: "/post/6.jpeg",
        userProfileImage: "person/5.jpeg",
        username: "Lisa",
        caption: "waoo catie",
        time: "22 hours ago",
    },
    {
        post: "/post/7.jpeg",
        userProfileImage: "person/6.jpeg",
        username: "Jinne",
        caption: "",
        time: "45 min ago",
    },
    {
        post: "/post/8.jpeg",
        userProfileImage: "person/7.jpeg",
        username: "Faizan",
        caption: "amazing place",
        time: "55 min ago",
    },
    {
        post: "/post/9.jpeg",
        userProfileImage: "person/8.jpeg",
        username: "Sana",
        caption: "memories with Love ❤",
        time: "12 hours ago",
    },
    {
        post: "/post/10.jpeg",
        userProfileImage: "person/9.jpeg",
        username: "yeshfeen",
        caption: "My friend",
        time: "13 hours ago",
    },
    {
        post: "/post/5.jpeg",
        userProfileImage: "person/10.jpeg",
        username: "Ayesha",
        caption: "Amazing",
        time: "14 hours ago",
    },
    {
        post: "/post/2.jpeg",
        userProfileImage: "person/girl2.png",
        username: "Tayyba",
        caption: "tasty",
        time: "16 hours ago",
    },
] 
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Story/>
        <Share/>
        {tempDataForPost.map((data)=>(
           <div key={data.username}>
              <Post post={data.post} userProfileImage={data.userProfileImage} username={data.username} caption={data.caption} time={data.time} />
           </div>
        ))}
      </div>
    </div>
  )
}

export default Feed
