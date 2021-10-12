import React, { useState } from "react";
import { Link } from "react-router-dom";
// import SignupFormContainer from "../session_form/signup_form_container"
// import LoginFormContainer from "../session_form/login_form_container"
import GreetingContainer from "../greeting/greeting_container";

const Dropdown = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <ul
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          <li className="dropdown-link" id="logSign-btn">
            <GreetingContainer />
          </li>
          <li className="dropdown-link">
            <Link to="/host_your_home" onClick={() => setClick(false)}>
              Host your home
            </Link>
          </li>
          <li className="dropdown-link">
            <Link to="/host_an_experience" onClick={() => setClick(false)}>
              Host an experience
            </Link>
          </li>
          <li className="dropdown-link">
            <Link to="/help" onClick={() => setClick(false)}>
              Help
            </Link>
          </li>
        </ul>
    );
}

export default Dropdown;