import React, { Component } from "react";
import "./nexmoMsg.css";
import Nexmo from "nexmo";
import API from "../../utils/API";

class NexmoMsg extends Component {
  state = {
    to: "",
    msg:"",

    mode:'hide'
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleContactSubmit = event => {
    event.preventDefault();
    this.setState({
      to: ""
    });
  };
showMsg = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      this.setState({
        mode: 'view'
      })
    
    };
  showDevs = event => {
    event.preventDefault();
    this.setState({
      mode:'hide'
    })
  }

  makeContact = event => {
    const nexmo = new Nexmo ({
      apiKey: "285c3b39",
      apiSecret: "wDmJ5xiRYKuy9Nb2"
      });
      const from = "17203866288"

      // nexmo.message.sendSms(from, to, msg)

      //Method to increment interview count under the developer
      API.incrementDevInterviews(this.props.devId)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  renderNexmoContainer(props) {
    if (this.state.mode === 'view') { 
    return (
      <div className="nexmoContainer"
        isVisible={this.state.isVisible}>
            <div className="nexmoMsg">
            <p>props.userName from props.company has requested an interview with you. Contact them at props.phoneNumber</p>
            <button
            className="btn btn-sm"
            onClick={this.makeContact}
            >Send</button>
            </div>
        </div> )
      } else {
        return (
          <div></div>
        )
      }
    }

renderMsgButton() {
  if(this.state.mode === 'view') {
    return (
      <button className="btn btn-sm nexmoBtn" 
        onClick={this.showDevs}
      > showDevs </button>
    );
  } else {
    return (
      <button className="btn btn-sm" 
        onClick={this.showMsg}
      > contactDev </button>

    );
  }
  }

  render () {
    return (
      <>
        {this.renderNexmoContainer()}
        {this.renderMsgButton()}
        </>
    )
  }

}

export default NexmoMsg;