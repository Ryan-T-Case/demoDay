// import React, { Component } from "react";
import React from "react";
// import { Link } from "react-router-dom";
import WelcomeNav from "../../components/WelcomeNav";
import "./style.css";

function Welcome() {
    return (
      <div>
        {/* <h1>demoDay</h1> */}
        <WelcomeNav />
        <div className="welcomeImgDiv">
          <img className="welcomeImg" src="./images/demoDayBeer.png" alt="Demo Day Logo"></img>
        </div>
      </div>
    );
  }

export default Welcome;