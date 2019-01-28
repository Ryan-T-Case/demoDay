import React, { Component } from "react";
import "./nexmoMsg.css";
import Nexmo from "nexmo";
import API from "../../utils/API";

class NexmoMsg extends Component {
    state = {
        to: "",
        msg: "",

        currentUser: "",
        currentUserId: "",
        userName: "",
        company: "",
        phoneNumber: "",

        mode: 'hide'
    }

    componentDidMount() {
        const currentUserId = sessionStorage.getItem("userId");
          const currentUser = sessionStorage.getItem("userData");
          this.setState({
            currentUser: currentUser,
            currentUserId: currentUserId,
        })
// this.getUserSetState(this.state.currentUser)
console.log(this.state.currentUser)
        API.getUserName(currentUser)
            .then(res => {
                console.log(this.state.currentUser)
                console.log(`getUser: ${JSON.stringify(res.data)}`);

                this.setState({
                    name: res.data.userName,
                    company: res.data.company,
                    phoneNumber: res.data.phoneNumber
                    // myObjectId: res.data._developers
                    // mongoose.Types.ObjectId(res.data._developers[1])
                })
            })
    }

    getUserSetState = () => {
        API.getUserName()
        .then(res => {
            console.log(this.state.currentUser)
            console.log(`getUser: ${JSON.stringify(res.data)}`);

            this.setState({
                name: res.data.userName,
                company: res.data.company,
                phoneNumber: res.data.phoneNumber
                // myObjectId: res.data._developers
                // mongoose.Types.ObjectId(res.data._developers[1])
            })
        })
    }


    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleContactSubmit = event => {
        event.preventDefault();
        this.setState({
            to: ""
        });
    }
    showMsg = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        const currentUser = sessionStorage.getItem("userData");

        this.setState({
            mode: 'view',
            currentUser: currentUser,
            msg: `${this.state.userName} from ${this.state.company} has requested an interview with you. Please contact them at ${this.state.phoneNumber}`

        })

    }
    showDevs = event => {
        event.preventDefault();
        this.setState({
            mode: 'hide'
        })
    }

    makeContact = event => {
        const nexmo = new Nexmo({
            apiKey: "285c3b39",
            apiSecret: "wDmJ5xiRYKuy9Nb2"
        });
        const from = "17203866288"
        let msg = `${this.state.userName} from ${this.state.company} has requested an interview with you. Please contact them at ${this.state.phoneNumber}`
        let to = this.state.to

        nexmo.message.sendSms(from, to, msg)
    }

    renderNexmoContainer() {
        if (this.state.mode === 'view') {
            return (
                <div className="nexmoContainer"
                    isVisible={this.state.isVisible}>
                    <div className="nexmoMsg">
                        <p>{this.state.currentUser} from {this.state.company} <br />has requested <br />an interview with you. <br />Please contact them at {this.state.phoneNumber}</p>
                        <button
                            className=" btn btn-sm"
                            onClick={this.makeContact}
                        >Send</button>
                    </div>
                </div>)
        } else {
            return (
                <div></div>
            )
        }
    }

    renderMsgButton() {
        if (this.state.mode === 'view') {
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

    render() {
        return (
            <div className="nexmoDiv">
                {this.renderNexmoContainer()}
                {this.renderMsgButton()}

            </div>
        )
    }

}

export default NexmoMsg;