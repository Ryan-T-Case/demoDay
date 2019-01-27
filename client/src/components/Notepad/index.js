import React, { Component } from "react";
import API from "../../../src/utils/API";
import "./notepad.css";

class Notepad extends Component {
  state = {
    note: "",

    mode:'hide'
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  // handleNoteSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     note: ""
  //   });
  //   API.saveNote(this.state.note)
  //   .then(res => {
  //     alert(JSON.stringify(res));
  //   })
  //   .catch (err => console.log(err))
    
  // };
showNotes = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      this.setState({
        mode: 'view'
      })
    
    };
    // HIDES NOTES AND SAVE CURRENT NOTE
  hideNotes = event => {
    event.preventDefault();
    this.setState({
      mode:'hide',
      note: this.state.note
    })
    API.saveNote(this.state.note)
    .then(res => {
      alert(JSON.stringify(res));
    })
    .catch (err => console.log(err))

  }

  renderNotepadContainer() {
    if (this.state.mode === 'view') { 
    return (
      <div className="notepadContainer"
        isvisible={this.state.isvisible}>
      <ul className="notesHere" 
      // style="listStyleType:circle;"
      >
      Notes&Reminders:
      <li>{this.state.note}</li>
      </ul>
      <div className="form-group">
      <textarea 
        className="form-control notepad" rows="3"
        value={this.state.note}
        name="note"
        onChange={this.handleInputChange}
        type="text"
      ></textarea>
      </div>
    </div> )
      } else {
        return (
          <div></div>
        )
      }
    }

renderButton() {
  if(this.state.mode === 'view') {
    return (
      <button className="btn noteBtn" 
        onClick={this.hideNotes}
      > hideNotes </button>
    );
  } else {
    return (
      <button className="btn noteBtn" 
        onClick={this.showNotes}
      > addNotes </button>

    );
  }
  }

  render () {
    return (
      <div>
        {this.renderNotepadContainer()}
        {this.renderButton()}
        </div>
    )
  }

}

export default Notepad;