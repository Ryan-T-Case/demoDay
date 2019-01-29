import React from "react";
import "./devCard.css";
import NexmoMsg from "../../components/NexmoMsg";

function DevCard(props) {
  return (
    <div className="cardi">
        <div className="content">
            <div className="img-container">
                <img className="devImg fluid-img" alt={props.name} src={props.imageURL} />
            </div>
        
        <div>
            <p className="devName">
            <strong>{props.name}</strong>
            </p>
            <a className="devLinks" href={props.linkedinLink}>
            <img className="devIcons" alt="linkedin" src="../images/linkedin.png" />
            </a>
            <a className="devLinks" href={props.githubLink}>
            <img className="devIcons" alt="gitHub" src="../images/githubBlue.png" />
            </a>
            <a className="devLinks" href={props.portfolioLink}>
            <img className="devIcons" alt="portfolio" src="../images/portfolio.png" />
            </a>
            {/* <a className="contactLinks" href={props.contact}>
            <img className="devIcons" alt="contact developer" src="./images/UR-Icon.png" />
            </a> */}
            <NexmoMsg 
            to={props.phoneNumber}
            devId={props.devId}/>
        </div>
        
    </div>

    </div>

  );
}

export default DevCard;