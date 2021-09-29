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


  return (
    <div className="navbar">
      <Link to="/" className="nav-links">
        <div className="left-items">
          AT bnb
          <i className="fab fa-airbnb"></i>
        </div>
      </Link>
      <div className="middle-items">
        <ul>
          <li className="places_to_stay">
            <Link to="/places_to_stay" className="nav-links">
              Places to stay
            </Link>
          </li>
          <li className="experiences">
            <Link to="/experiences" className="nav-links">
              Experiences
            </Link>
          </li>
          <li className="online_experiences">
            <Link to="/online_experiences" className="nav-links">
              Online Experiences
            </Link>
          </li>
        </ul>
      </div>
      {currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}
    </div>
  );
};

export default Greeting;



