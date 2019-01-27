import React from "react"
import { Link } from "react-router-dom";
import "./welcomeNav.css";

function WelcomeNav() {
return (
    <div className="nav">
        <div className="navbar welcomeNav">
                <Link to="/sign-in" className={window.location.pathname === "/sign-in" ? "navbar-brand" : "nav-link"}>
                signIn
                </Link>
            
            <Link to="/create-acct" className={window.location.pathname === "/create-acct" ? "navbar-brand" : "nav-link"}>
                createAccount
                </Link>
                </div>
    </div>
)
}

export default WelcomeNav;