import { StoryData } from "../../../tempData";
import Card from "./card/Card";
import "./story.scss";

const Story = () => {
    
  return (
    <div className="story">
       <div className="storyWrapper">
          {StoryData.map((story)=>(
            <div className="storyCard" key={story.username}>
            <Card storyImage={story.story} storyProfileImage={story.profileImage} storyUsername={story.username} userProfile={story.addIcon}  />
         </div>
          ))}
       </div>
    </div>
  )
}

export default Story
