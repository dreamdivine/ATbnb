import React, { useState} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";


const Nav = () => {
      const [click, setClick] = useState(false);
      const [dropdown, setDropdown] = useState(false);

        const goToPages = () => setClick(false);

      const onMouseEnter = () => {
          setDropdown(true)
      }

      const onMouseLeave = () => {
          setDropdown(false)
      };

    return (
      <div className="top-portion">
        <div className="left-items">
          <Link to="/" className="nav-links" onClick={goToPages}>
            AT bnb
            <i className="fab fa-airbnb"></i>
          </Link>
        </div>
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
        <div className="right-items">
          <ul onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <li className="bar-icon">
            <i className="fas fa-bars"></i>
          </li>
          <li className="person-circle">
            <i className="far fa-user-circle"></i>
          </li>
          {dropdown && <Dropdown />}
          </ul>
        </div>
      </div>
    );
  }

export default Nav;
