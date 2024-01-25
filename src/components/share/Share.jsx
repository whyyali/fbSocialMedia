import { ShareData } from "../../../tempData";
import "./share.scss";

const Share = () => {

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/person/girl.jpg" alt="" className="shareImage" />
                    <input placeholder="whats in your mind Aroosa?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        {ShareData.map((data) => (
                            <div className="shareOption" key={data.text}>
                                <img src={data.img} alt="" className="shareOptionImage" color={data.color} />
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
