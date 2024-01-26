import { PostData } from "../../../../tempData";
import Post from "../../post/Post";
import Share from "../../share/Share";
import SideCard from "../card/sidecard/SideCard";
import "./profilebottomsection.scss";

const ProfileBottomSection = () => {
    const FilterDataInAscOrder = PostData.sort((a,b) => a.asc - b.asc);
    return (
        <div className="profileBottom">
            <div className="profileBottomLeft">
                <SideCard />
            </div>
            <div className="profileBottomRight">
                <Share />
                {FilterDataInAscOrder.map((data) => (
                    <div key={data.id}>
                        <Post post={data.post} userProfileImage={"/person/girl.jpg"} username={"Aroosa Noor"} caption={data.caption} time={data.time}
                            liked={data.like} comment={data.comment}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProfileBottomSection
