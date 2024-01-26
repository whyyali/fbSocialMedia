import SideCardHeader from "../../sidecardheader/SideCardHeader"
import "./biocard.scss";

const BioCard = (props) => {
    const {headingBio, editBio, editDetails, editFeatured} = props;
  return (
    <div className="sideCardBody">
        <SideCardHeader heading="Intro" topBtn="" />
        <div className="sideCardForBio">
        <div className="sideCardBioHeading">{headingBio}</div>
            <div className="sideCardButtons">
                <span className="sideCardButton">{editBio}</span>
                <span className="sideCardButton">{editDetails}</span>
                <span className="sideCardButton">{editFeatured}</span>
            </div>
        </div>
    </div>
  )
}

export default BioCard
