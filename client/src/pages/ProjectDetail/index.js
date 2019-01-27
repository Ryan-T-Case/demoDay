import React, { Component } from "react";
import API from "../../../src/utils/API";
import DevCard from "../../components/DevCard/DevCard";
import "./style.css"
import BlurBox from "../../components/BlurBox/BlurBox.js";
import Notepad from "../../components/Notepad";
// import Developers from "../../../src/developers.json";




class ProjectDetail extends Component {
  state = {
    isVisible: false,

    projectName: "",
    
    developers: [],

    // name: "",
    // githubLink: "",
    // linkedinLink: "",
    // portfolioLink: "",
    // phoneNumber: "",
    // imageURL: "",
  };


  componentDidMount() {
    this.loadProject();
  }
// LOAD ALL DEVS FROM THE DB
loadProject = () => {
  API.getProject(this.props.match.params.project)
  .then(res => {
    console.log(`loadProjectmethod: ${JSON.stringify(res.data)}`);
    this.setState({
      projectName: res.data.name
      
    })
  //   res.data._developers.forEach(function(developer) {
  //     API.getDev(developer._id)
  //     .then( red => {
  //       console.log(developer);
      
  //   })
  // })
})
}
  loadDevs = () => {
    API.getDevs(this.props.match.params.project)
    .then(res => {
      console.log(res.data);
    this.setState({
      developers: res.data
      // name: res.data.name,
      // githubLink: res.data.github_link,
      // linkedinLink: res.data.linkedin_link,
      // portfolioLink: res.data.portfolio_link,
      // phoneNumber: res.data.phone_number,
      // imageURL: res.data.imageURL,
      // interview_count: res.data.interview_count
      
    })
  }
  )
  
    .catch(err => console.log(`loadDevs function ${err}`));
    };
    
   


// CONDITIONAL RENDERING OF 'SHOWNOTES'
  showNotes = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible
    })
  
  };
render() {
    return (
      <div className="container">
        <div>
            <img className="uOfRLogo" src="../images/UofRproStudies.png" alt="University of Richmond logo" />
        </div>

         <div className="projectTitle">
            <h2> {this.state.projectName}
            </h2>

            {/* <h5>{ props.projectDesc }</h5> */}
            </div>
          <Notepad />

        <div>
        {this.state.developers.length ? (
          <ul className="list-group list-group-flush">
          {this.state.developers.map(developer => (
                <li 
                className="devItem list-group-item"
                // key={developer._id}
                >
                <BlurBox />
                <DevCard 
                name= {developer.name}
                linkedinLink= {developer.linkedin_link}
                githubLink={developer.github_link}
                portfolioLink={developer.portfolio_link}
                imageURL={developer.imageURL}
                />
                </li>
           ))}
            </ul>
        ):(
          <h3>No Results to Display</h3>
        )}
        </div>
      </div>
    
    );
  }

}

export default ProjectDetail;