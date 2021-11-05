import React from "react";
import { Link } from "react-router-dom";

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
        {/* <h3>
          <Link to="/">
            testTask#1
          </Link>
        </h3> */}
        <ul className="d-flex">
          <li>
            <Link to="/main/">Main Page </Link>
          </li>
          <li>
            <Link to="/news/">News</Link>
          </li>
          <li>
            <Link to="/profile">Profile </Link>
          </li>
          <li>
            <Link to="/login">Login </Link>
          </li>
        </ul>
  
      
      </div>
    );
};

export default Header;