import "./sidecardheader.scss";

const SideCardHeader = (props) => {
    const {heading, topBtn} = props;
    return (
        <div className="sideCardHeader">
            <h1 className="sideCardHeading">{heading}</h1>
            <span className="sideCardTopButton">{topBtn}</span>
        </div>
    )
}

export default SideCardHeader
