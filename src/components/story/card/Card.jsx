import "./card.scss";

const Card = (props) => {
    const { storyImage, storyProfileImage, storyUsername, userProfile } = props;
    return (
        <div className="card">
            <div className="cardWrapper">
                <img src={storyImage} alt="" className="cardStoryImage" />
                <div className="cardUserData">
                    <img src={storyProfileImage} alt="" className="cardUserProfileImage" />
                    <div className="cardBottom">
                        <span className="cardUsername">{storyUsername}</span>
                        <h1 className={userProfile ? "addStory" : "hide"}>+</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
