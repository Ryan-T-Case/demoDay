import React, { Component } from "react";
import API from "../../utils/API";
import "./signinForm.css";

class SigninForm extends Component {
    state = {
        isLoggedIn: false,

        
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
      console.log(`On form submit, you get: ${this.state.userName}  ${this.state.password} and then call validate`);
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();


        // ADMIN PASSWORD FIX
        // -0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-
        if (this.state.userName === "UofR_admin" && this.state.password === "dataViz") {
          window.location.assign('/manage-event');
        }else {
          // ADMIN PASSWORD
        // -0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-


        this.validateUser({
          userName: this.state.userName,
          password: this.state.password
      
        });
      };
    }
    validateUser = query => {
      // console.log(`about to validateuser!! ${JSON.stringify(query)}`);
      API.getUser(query)
      .then(res => {
        console.log(`LOGIN: ${JSON.stringify(res)}`);
      if (res.data.success) {
        console.log("success");
        this.setState({isLoggedIn: true, });
        this.setState({ loginMsg: res.data.message});
        window.localStorage.setItem("SMC_authkey", res.data.token);

        // save username to session
        sessionStorage.setItem("userData", this.state.userName.toLowerCase());
        
        window.location.assign('/view-event');
      } else {
        console.log("failure");
        this.setState({ isLoggedIn: false });
        this.setState({ loginMsg: res.data.message });
        window.localStorage.setItem("SMC_authkey", "");
        window.location.assign('/sign-in');
      }
      console.log(`LOGIN: state = ${JSON.stringify(this.state)}`);
    })
    .catch(err => console.log(err));
    };

      render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="inputUsername">userName</label>
                  <input
                  className="form-control"
                  id="inputUsername"
                  value={this.state.value}
                  name="userName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="enter a userName"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                  <input
                  className="form-control"
                  id="inputPassword"
                  value={this.state.value}
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="Password"
                  />
                </div>

              <button className="btn" onClick={this.handleFormSubmit}>Submit</button>
              
            </form>
          </div>
        );
    }
}
export default SigninForm;