import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Cleat logo.png";
import "./Navbar.css";
import bar from '../../assets/bar.svg'
import closeIcon from '../../assets/close.svg'
import { useSelector } from "react-redux";

const Navbar = () => {

  const { currentUser } = useSelector((state) => state.user);
  const [modeChanger, setModeChanger] = useState(false);

  return (
    <header>
      <div className={`container ${modeChanger ? "active" : ""} `}>
        <div className="logo">
          <img src={logo} alt="" />
          <h3>Cleat Connect</h3>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to="/homepage" className="nav-link">
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
              <Link to={currentUser ? "/profile" : "/auth"} className="nav-link" id={currentUser ? 'profile' : 'btn'}>
                { currentUser ? "Profile" : "Sign Up"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="overlay"></div>
        <div
          className="humburger-menu"
          onClick={() => {setModeChanger(!modeChanger)}}
        >
          <img src={ modeChanger ? closeIcon : bar} alt="menubar" />
          {/* <img src={closeIcon} alt="closeicon" /> */}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
