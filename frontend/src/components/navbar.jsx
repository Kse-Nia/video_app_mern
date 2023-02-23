import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [show, setShow] = React.useState(false);

  return (
    <navbar className="navbar">
      <div className="logo">
        <img src={logo} className="navbar_logo" alt="video company logo" />
      </div>
      <ul>
        <li>
          <Link className="navbar_link" to="/dashboard">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar_link" to="/myprofile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="navbar_link" to="/mylist">
            Favoris
          </Link>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
