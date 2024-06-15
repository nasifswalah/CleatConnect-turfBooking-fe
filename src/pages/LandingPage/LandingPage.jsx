import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import cleatLogo from '../../assets/Cleat logo.png'
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <main>
      <div className="big-wrapper">
        <Navbar />
        <div className="showcase-area">
          <div className="container">
            <div className="left">
              <div className="title">
                <h3>Future is here</h3>
                <h3>Start exploring now</h3>
              </div>
              <div className="text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus accusantium excepturi illo corporis harum ipsum
                  ducimus minus sunt. 
                </p>
              </div>
              <div className="explore-btn">
                <Link id="btn" className="start-btn">
                  Get started
                </Link>
              </div>
            </div>
            <div className="right">
                <img className="right-image" src={cleatLogo} alt="" />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default LandingPage;
