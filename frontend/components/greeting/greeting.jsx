import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div className="session-btn">
      <div className="session-loginBtn">
        <li className="logsigninColumn" onClick={() => openModal("login")}><p className="session-text">Login</p></li>
      </div>
      <div className="session-signupBtn">
        <li className="logsigninColumn" onClick={() => openModal("signup")}><p className="session-text">Sign up</p></li>
      </div>
    </div>
  );
  const personalGreeting = () => (
    <div className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </div>
  );

  return (currentUser ? personalGreeting(currentUser, logout) : sessionLinks());
};

export default Greeting;
