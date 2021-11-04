import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../navbar/dropdown";
import Modal from "../modal/modal";

const NavListingShow = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const goToPages = () => setClick(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div className="listing-show-page">
      <Modal />
      <div className="Nav-Bar-City">
        <div className="logo-city">
          <Link to="/" onClick={goToPages}>
            <i className="fab fa-airbnb" id="airbnb-city"></i>
          </Link>
          <p className="atbnb-city">AT bnb</p>
        </div>
        <div className="start-search-icon">
          <div className="start-search">Start your search</div>
          <div className="search-icon">
            <i className="fas fa-search" id="search-icon-city"></i>
          </div>
        </div>
        <div className="right-side">
          <li className="host">
            <Link to="/host" className="become_host_city">
              Become a Host
            </Link>
          </li>
          <i className="fas fa-globe" id="globe-city"></i>
          <div
            className="right-icon-city"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <i className="fas fa-bars" id="bars"></i>
            <i className="far fa-user-circle" id="circle-person"></i>
            {dropdown && <Dropdown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavListingShow;
