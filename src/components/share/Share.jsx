import { PermMedia , Label , Room, EmojiEmotions } from "@mui/icons-material"
import "./share.scss";

const Share = () => {

    const shareOptionData = [
        {
            text: "Photo or vedio",
            img: <PermMedia htmlColor="red" />,
            color: "red"
        },
        {
            text: "Tag",
            img: <Label htmlColor="blue" />,
            color: "blue"
        },
        {
            text: "Location",
            img: <Room htmlColor="green" />,
            color: "green"
        },
        {
            text: "Feelings",
            img: <EmojiEmotions htmlColor="goldenrod" />,
            color: "goldenrod"
        },
    ]

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/person/girl.jpg" alt="" className="shareImage" />
                    <input placeholder="whats in your mind Ali?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        {shareOptionData.map((data) => (
                            <div className="shareOption" key={data.text}>
                                <span className="shareOptionImage" color={data.color}>{data.img}</span>
                                <span className="shareOptionText">{data.text}</span>
                            </div>
                        ))}
                    </div>
                    <button className="shareButton">Share</button> 
                </div>
            </div>
        </div>
    )
}

export default Share
