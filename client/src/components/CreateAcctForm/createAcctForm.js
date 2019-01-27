import React, { Component } from "react";
import API from "../../utils/API";
import "./acctForm.css";


class CreateAcctForm extends Component {
    state = {
        userName: "",
        company: "",
        phoneNumber: "",
        password: "",

        isLoggedIn: "",
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;
    
        // if (name === "password") {
        //   value = value.substring(0, 15);
        // }
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };


    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log("yay we got here");
      //   if (!this.state.userName || !this.state.company || !this.state.password) {
      //     alert("Please enter a UserName, Company, and Password!");
      //   } else if (this.state.password.length < 6) {
      //     alert(
      //       `Choose a more secure password, ${this.state.userName}, by the way, I love what you are doing at  ${this.state
      //         .company}`
      //     );
      //   // } else {
      //   //   alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      //   // }
    
      //   this.setState({
      //     userName: "",
      //     company: "",
      //     phoneNumber: "",
      //     password: "",
      //   });
      // };
      
      this.createUser({ userName: this.state.userName,
        company: this.state.company,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password});

        console.log(`User Name: ${this.state.userName}
        Password: ${this.state.password}`);

    }

    // handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
    //     event.preventDefault();
    // };


    createUser = query => {
      console.log(`query= ${JSON.stringify(query)}`);

      API.createUser(query)
      .then(res => {
        alert(JSON.stringify(res));
        if (res.data.success) {

        console.log("User created")
        window.location.assign('/sign-in');
        } else {
          console.log("failed");
          window.location.assign("/create-acct");
        }
        // if setState is true then compile next component
      })
      .catch (err => console.log(err))
    }




      render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
          <form>
           
            <div className="form-group">
            <label htmlFor="inputUsername">userName</label>
              <input
                className="form-control"
                id="inputUsername"
                value={this.state.userName}
                name="userName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="enter a userName"
              />
              </div>

              <div className="form-group">
              <label htmlFor="inputCompany">company</label>
              <input
                className="form-control"
                id="inputCompany"
                value={this.state.company}
                name="company"
                onChange={this.handleInputChange}
                type="text"
                placeholder="company being represented?"
              />
              </div>

              <div className="form-group">
              <label htmlFor="inputPhoneNumber">phoneNumber</label>
               <input
                className="form-control"
                id="inputPhoneNumber"
                value={this.state.phoneNumber}
                name="phoneNumber"
                onChange={this.handleInputChange}
                type="text"
                placeholder="add a # to contact Developers?"
              />
              </div>

              <div className="form-group">
              <label htmlFor="inputPassword">password</label>
              <input
                className="form-control"
                id="inputPassword"
                value={this.state.password}
                name="password"
                onChange={this.handleInputChange}
                type="password"
                placeholder="password"
              />
              </div>

              <button className="btn" onClick={this.handleFormSubmit}>Submit</button>
            
          </form>
        );
    }
}

export default CreateAcctForm;