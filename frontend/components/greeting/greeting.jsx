import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
      <ul className="session-btn">
        <div className="session-loginBtn">
          <li onClick={() => openModal("login")}> Login</li>
        </div>
        <div className="session-signupBtn">
          <li onClick={() => openModal("signup")}>Sign up!</li>
        </div>
      </ul>
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
