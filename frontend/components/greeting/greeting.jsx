import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal("login")}> Login</button>
      <button onClick={() => openModal("signup")}>Sign up!</button>
    </nav>
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
