import React from "react";
import "./projectCard.css";
import Checkbox from "../Checkbox";
// import Notepad from "../Notepad";

// projectView = event => {


// }


function ProjectCard(props) {
  return (
        <div className="projectCard">

          <div className="content">
            <h1 className="projectTitle">
            <strong>{props.projectName}</strong>
            </h1>
            <h5 className="projectDesc">{props.projectDesc}</h5>

              <div className="check">
              {/* <Checkbox /> */}
              </div>
              {/* <button className="btn detailBtn"  */}
              {/* onClick={this.projectView}
              >
              View Project</button> */}
          </div>
        </div>
  );
}

export default ProjectCard;