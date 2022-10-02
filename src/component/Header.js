import React from "react";
import "../css/simple.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="menu">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/Result">Result</Link>
            </li>
            <li>
              <Link to="/Logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
