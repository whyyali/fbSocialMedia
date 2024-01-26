import "./profilecover.scss";

const ProfileCover = () => {
    return (
        <div className="profileCoverBackground">
            <img src="/profilebg.jpg" alt="" className="profileCoverImage" />
            <div className="profileSection">
                <div className="profileData">
                    <div className="profileUserImage">
                        <img src="/person/girl.jpg" alt="" className="profileImage" />
                    </div>
                    <div className="profileName">
                        <h1 className="profileUsername">Aroosa Noor</h1>
                        <p className="profileUserfriends">2 friends</p>
                    </div>
                </div>
                <div className="profileTopButtons">
                    <div className="profileTopButton" style={{ background: "blue" }}>
                        <img src="/addstory.png" alt="" className="profileTopButtonImage" />
                        <span className="profileTopAddStoryButton profileTopBtn">Add to story</span>
                    </div>
                    <div className="profileTopButton">
                        <img src="/edit.png" alt="" className="profileTopButtonImage" />
                        <span className="profileTopEditButton profileTopBtn">Edit profile</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCover
