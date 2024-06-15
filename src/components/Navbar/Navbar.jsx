import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Cleat logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [modeChanger, setModeChanger] = useState("");

  return (
    <header>
      <div className={`container ${modeChanger} `}>
        <div className="logo">
          <img src={logo} alt="" />
          <h3>Cleat Connect</h3>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to="#" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                Turf
              </Link>
            </li>
            <li>
              <Link to="/auth" className="nav-link" id="btn">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
        <div className="overlay"></div>
        <div
          className="humburger-menu"
          onClick={() => setModeChanger("active")}
        >
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
