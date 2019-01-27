import React, { Component } from "react";
import API from "../../utils/API";

class NewProjectForm extends Component {
  // Setting the component's initial state
  state = {
    // Project Input State
    projectName: "",
    projectLink: "",
    projectDescription: "",
    projectImageURL: "",
    // Developer Input State
    developers: [{devName: "", devGithub: "", devLinkedin: "", devPortfolio: "", devImageURL: "",
    devPhoneNumber: ""}],
  };

  handleStaticInputChange = event => {
    //Project Input Control

    // Getting the value and name of the input which triggered the change
    let projectValue = event.target.value;
    const projectName = event.target.name;

    if (projectName === "description") {
      projectValue = projectValue.substring(0, 140);
    }

    // Updating the input's state
    this.setState({
      [projectName]: projectValue
    });
  }

  handleDynamicInputChange = event => {
    //Developer Input Control
    if (["devName form-control", "devGithub form-control", "devLinkedin form-control", "devPortfolio form-control", "devImageURL form-control", "devPhoneNumber form-control"].includes(event.target.className) ) {
      let developers = [...this.state.developers];
      developers[event.target.dataset.id][event.target.name] = event.target.value;
      this.setState({ developers })
    } else {
      this.setState({ [event.target.name]: event.target.value })
    }
  };

  addDeveloper = (event) => {
    event.preventDefault();
    // Send the last item in state under the developer array to the db
    // const devArray = this.state.developers;
    // const lastItem = devArray.filter(developer => devArray.indexOf(developer) === (this.state.developers.length - 1));
    // console.log(lastItem);
    // console.log(lastItem[0].devName);


    this.setState((prevState) => ({
      developers: [...prevState.developers, {devName: "", devGithub: "", devLinkedin: "", devPortfolio: "", devImageURL: "",
      devPhoneNumber: ""}],
    }));
  }

  resetDevelopers = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      developers: [{devName: "", devGithub: "", devLinkedin: "", devPortfolio: "", devImageURL: "",
      devPhoneNumber: ""}],
    }));
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // alert("Form submitted!");
    // if (!this.state.projectName || !this.state.projectLink || !this.state.projectDescription || !this.state.projectImageURL) {
    //   alert("Please fill out all project info completely!");
    // } else if (!this.state.devName || !this.state.devGithub || !this.state.devLinkedin || !this.state.devPortfolio || !this.state.ImageURL) {
    //   alert("Please fill out all developer info completely!");
    // } else if (!this.state.devPhoneNumber) {
    //   this.statedevPhoneNumber = 0;
    // }
    API.createProject({
      name: this.state.projectName,
      link: this.state.projectLink,
      description: this.state.projectDescription,
      imageURL: this.state.imageURL
    })
      .then(res =>
      this.state.developers.forEach(function(developer) {
        console.log(developer);
        API.createDeveloper({
          name: developer.devName,
          github_link: developer.devGithub,
          linkedin_link: developer.devLinkedin,
          portfolio_link: developer.devPortfolio,
          phone_number: developer.devPhoneNumber,
          imageURL: developer.devImageURL,
          _project: res.data._id
        })
          .then(res => API.updateProject(res.data._project, {id: res.data._id}))
          .then(res => console.log(res.data))
          
          .catch(err => console.log(err))
      }))
      .then(res => this.resetForm())
      .catch(err => console.log(err));




  };

  resetForm = () => {
    this.setState({
      // Project Input State
      projectName: "",
      projectLink: "",
      projectDescription: "",
      projectImageURL: "",
      // Developer Input State
      developers: [{devName: "", devGithub: "", devLinkedin: "", devPortfolio: "", devImageURL: "",
      devPhoneNumber: ""}],
      });
  }

  render() {
    let {projectName, projectLink, projectDescription, projectImageURL, developers} = this.state
    return (
      <div>
        <form className="form">
          <h3 className="my-4">Project Info</h3>
          <div className="form-group">
            <input className="form-control"
              value={projectName}
              name="projectName"
              id="projectName"
              type="text"
              placeholder="Project Name"
              onChange={this.handleStaticInputChange}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              value={projectLink}
              name="projectLink"
              id="projectLink"
              type="text"
              placeholder="Link to the project on GitHub"
              onChange={this.handleStaticInputChange}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              value={projectImageURL}
              name="projectImageURL"
              id="projectImageURL"
              type="text"
              placeholder="Link to the Project Logo Image"
              onChange={this.handleStaticInputChange}
            />
          </div>
          <div className="form-group">
            <textarea className="form-control"
              value={projectDescription}
              name="projectDescription"
              id="projectDescription"
              type="text"
              placeholder="Brief description of the project"
              onChange={this.handleStaticInputChange}
            />
          </div>
          <h3 className="my-2">Developer Info</h3>
          {
            developers.map((val, idx) => {
              let devNameId = `devName-${idx}`, devGithubId = `devGithub-${idx}`, devLinkedinId = `devLinkedinId-${idx}`, devPortfolioId = `devPortfolio-${idx}`, devImageURLId = `devImageURL-${idx}`, devPhoneNumberId = `devPhoneNumber`
              return (
                <div key={idx}>
                  <div className="border border-dark p-3 m-3">
                    <div>
                      <div className="form-group">
                        <label htmlFor={devNameId}>{`Developer #${idx + 1}`}</label>
                        <input type="text" key={`a-${idx}`} datafield="devName" name={"devName"} data-id={idx} id={devNameId} value={developers[idx].devName} className="devName form-control" placeholder="Developer Name" onChange={this.handleDynamicInputChange}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor={devGithubId}>{`GitHub Link`}</label>
                        <input type="text" key={`b-${idx}`} name={"devGithub"} data-id={idx} id={devGithubId} value={developers[idx].devGithub} className="devGithub form-control" placeholder="Link to the Developer's GitHub profile" onChange={this.handleDynamicInputChange}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor={devLinkedinId}>{`LinkedIn Link`}</label>
                        <input type="text" key={`c-${idx}`} name={"devLinkedin"} data-id={idx} id={devLinkedinId} value={developers[idx].devLinkedin} className="devLinkedin form-control" placeholder="Link to the Developer's LinkedIn profile" onChange={this.handleDynamicInputChange}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor={devPortfolioId}>{`Portfolio Link`}</label>
                        <input type="text" key={`d-${idx}`} name={"devPortfolio"} data-id={idx} id={devPortfolioId} value={developers[idx].devPortfolio} className="devPortfolio form-control" placeholder="Link to the Developer's Portfolio" onChange={this.handleDynamicInputChange}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor={devImageURLId}>{`Bio Image Link`}</label>
                        <input type="text" key={`e-${idx}`} name={"devImageURL"} data-id={idx} id={devImageURLId} value={developers[idx].devImageURL} className="devImageURL form-control" placeholder="Link to the Developer's Bio Image" onChange={this.handleDynamicInputChange}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor={devPhoneNumberId}>{`Phone Number`}</label>
                        <input type="text" key={`f-${idx}`} name={"devPhoneNumber"} data-id={idx} id={devPhoneNumberId} value={developers[idx].devPhoneNumber} className="devPhoneNumber form-control" placeholder="Developer's phone number (no dashes or parentheses)" onChange={this.handleDynamicInputChange}/>
                      </div>
                    </div>
                  </div>
                </div>
              ) 
            })
          }
          <button className="btn my-2 mx-2" onClick={this.addDeveloper}>Add Developer</button>
          <button className="btn my-2 mx-2" onClick={this.resetDevelopers}>Reset Developers</button>
          <button type="submit" value="FormSubmit" className="btn" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewProjectForm;