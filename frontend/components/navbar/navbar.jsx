import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const goToPages = () => setClick(false);


  return (
    <div className="top">
      <div className="Nav-Bar">
        <div className="logo">
          <Link to="/" onClick={goToPages}>
            <i className="fab fa-airbnb" id="airbnb"></i>
          </Link>
          <p>AT bnb</p>
        </div>
        <div className="middle-items">
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
        </div>
        <div className="right-side">
          <li className="host">Become a Host</li>
          <i className="fas fa-globe" id="globe"></i>
          <div className="right-icon">
            <i className="fas fa-bars" id="bars"></i>
            <i className="far fa-user-circle" id="circle-person"></i>
          </div>
        </div>
      </div>
      <div className="guest-booking">
        <div className="location">
          <ul>
            <li className="header">Location</li>
            <li className="detail">Where are you going?</li>
          </ul>
        </div>
        <div className="check-in">
          <ul>
            <li className="header">Check in</li>
            <li className="detail">Add dates</li>
          </ul>
        </div>
        <div className="check-out">
          <ul>
            <li className="header">Check out</li>
            <li className="detail">Add dates</li>
          </ul>
        </div>
        <div className="guests">
          <ul>
            <li className="header">Guests</li>
            <li className="detail">Add guests</li>
          </ul>
        </div>
        <div className="search">
          <i className="fas fa-search" id="search-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
