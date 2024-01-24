import { AddCircle } from "@mui/icons-material"
import Card from "./card/Card";
import "./story.scss";

const Story = () => {
   const tempDataForStories =[
        {
            story: "/post/1.jpeg",
            profileImage: "person/girl.jpg",
            username: "Aroosa",
            icon: <AddCircle />,
        },
        {
            story: "/post/2.jpeg",
            profileImage: "person/1.jpeg",
            username: "Hina",
        },
        {
            story: "/post/3.jpeg",
            profileImage: "person/2.jpeg",
            username: "Jone",
        },
        {
            story: "/post/4.jpeg",
            profileImage: "person/3.jpeg",
            username: "Beauty",
        },
        {
            story: "/post/5.jpeg",
            profileImage: "person/4.jpeg",
            username: "Mahnoor",
        },
        {
            story: "/post/6.jpeg",
            profileImage: "person/5.jpeg",
            username: "Lisa",
        },
        {
            story: "/post/7.jpeg",
            profileImage: "person/6.jpeg",
            username: "Jinne",
        },
        {
            story: "/post/8.jpeg",
            profileImage: "person/7.jpeg",
            username: "Faizan",
        },
        {
            story: "/post/9.jpeg",
            profileImage: "person/8.jpeg",
            username: "Sana",
        },
        {
            story: "/post/10.jpeg",
            profileImage: "person/9.jpeg",
            username: "yeshfeen",
        },
        {
            story: "/post/5.jpeg",
            profileImage: "person/10.jpeg",
            username: "Ayesha",
        },
        {
            story: "/post/2.jpeg",
            profileImage: "person/girl2.png",
            username: "Tayyba",
        },
   ] 
    
  return (
    <div className="story">
       <div className="storyWrapper">
          {tempDataForStories.map((data) =>(
             <div className="storyCard" key={data.username}>
                <Card storyImage={data.story} storyProfileImage={data.profileImage} storyUsername={data.username} userProfile={data.icon}  />
             </div>
          ))}
       </div>
    </div>
  )
}

export default Story
