import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import CreateAcct from "./pages/CreateAcct";
import Welcome from "./pages/Welcome";
import ViewEvent from "./pages/ViewEvent";
import ProjectDetail from "./pages/ProjectDetail";
import AdminManage from "./pages/AdminManage";
import AdminNewProject from "./pages/AdminNewProject";
import AdminDataviz from "./pages/AdminDataviz";
import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";
import "./app.css";


class App extends Component {
  state = {
    isLoggedIn: false,
    loginUserName: ""
  }

  handleLoginStatus = (passedStatus, passedUserName) => {
    console.log("APP: Loginstatus and email = " + passedStatus + " " + passedUserName);
    if (passedStatus) {
      this.setState({ isLoggedIn: true, });
      this.setState({ loginUserName: passedUserName });
    } else {
      this.setState({ isLoggedIn: false });
      this.setState({ loginUserName: passedUserName });
    };
    console.log("APP: state = " + JSON.stringify(this.state));
  };


  reportLogin = () => {
    let note = this.state.isLoggedIn;
    return note
  };

  reportUserName = () => {
    let userName = this.state.loginUserName;
    return userName;
  };


  render() {
  return (
    <Router>
      <div className="container">
      <div className="row">
      <div className="col-sm-12 col-md-9 offset-md-2">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/sign-in" component={Signin} />
          <Route exact path="/create-acct" component={CreateAcct} />
          <Route exact path="/view-event" component={ViewEvent} />
          <Route exact path="/project-detail/:project" component={ProjectDetail} />         
          {/* <Route exact path="/view-event/project-detail" component={ProjectDetail} /> */}
          {/* Admin Routes Below */}
          <Route exact path="/manage-event" component={AdminManage} />
          <Route exact path="/manage-event/add-project" component={AdminNewProject} />
          <Route exact path="/manage-event/view-data" component={AdminDataviz} />

          <Route component={NoMatch} />
          {/* <Route exact path=":user/view-event" component={ViewEvent} />
          <Route exact path=":user/:project/project-detail" component={ProjectDetail} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
      </div>
      </div>
    </Router>
  );
}
};

export default App;
