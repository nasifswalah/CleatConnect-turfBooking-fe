import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./HomePage.css";
import sampleImage from "../../assets/sample-image.png";
import circketImage from "../../assets/cricket-player.png";
import footballImage from "../../assets/football-player.png";
import tennisImage from "../../assets/tennis-player.png";
import basketballImage from "../../assets/basketball-player.png";
import linkdinIcon from "../../assets/linkdin.svg"
import facebookIcon from "../../assets/facebook.svg"
import twitterIcon from "../../assets/twitter.svg"
import instagramIcon from "../../assets/instagram.svg"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home-text">
          <h1>
            Cleat Connect <br /> Sports
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            quia placeat quaerat omnis <br />
            voluptates assumenda nulla ad facere accusamus inventore.
          </p>
        </div>
      </section>

      <section className="type-container">
        <div className="type-text">
          <h2>
            Start your game with <br /> lots of services
          </h2>
        </div>

        <div className="row-items">
          <div className="container-box">
            <div className="container-image">
              <img src={circketImage} alt="" />
            </div>
            <h4>Cricket Pitchs</h4>
            <p>12 Pitches</p>
          </div>
          <div className="container-box">
            <div className="container-image">
              <img src={footballImage} alt="" />
            </div>
            <h4>Football Fields</h4>
            <p>12 Fields</p>
          </div>
          <div className="container-box">
            <div className="container-image">
              <img src={basketballImage} alt="" />
            </div>
            <h4>Basketball Courts</h4>
            <p>12 Courts</p>
          </div>
          <div className="container-box">
            <div className="container-image">
              <img src={tennisImage} alt="" />
            </div>
            <h4>Tennis Courts</h4>
            <p>12 Courts</p>
          </div>
        </div>
      </section>

      <section className="turf-container">
        <div className="title">
          <h2>
            Our Upcoming <br /> Sport fields
          </h2>
        </div>

        <div className="turf-content">
          <div className="box">
            <div className="thum">
              <img src={sampleImage} alt="sample-image" />
              <h3>Turf name</h3>
            </div>

            <div className="dest-content">
              <div className="location">
                <h4>Location</h4>
                <p>court type</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="thum">
              <img src={sampleImage} alt="sample-image" />
              <h3>Turf name</h3>
            </div>

            <div className="dest-content">
              <div className="location">
                <h4>Location</h4>
                <p>court type</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="thum">
              <img src={sampleImage} alt="sample-image" />
              <h3>Turf name</h3>
            </div>

            <div className="dest-content">
              <div className="location">
                <h4>Location</h4>
                <p>court type</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="thum">
              <img src={sampleImage} alt="sample-image" />
              <h3>Turf name</h3>
            </div>

            <div className="dest-content">
              <div className="location">
                <h4>Location</h4>
                <p>court type</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="courts-container" id="courts">
        <div className="title">
          <h2>
            Our Popular <br />
            Courts
          </h2>
        </div>

        <div className="courts-content">
          <div className="court-content">
            <img src={sampleImage} alt="" />
            <h5>Turf Name</h5>
            <p>Location</p>
          </div>
          <div className="court-content">
            <img src={sampleImage} alt="" />
            <h5>Turf Name</h5>
            <p>Location</p>
          </div>
          <div className="court-content">
            <img src={sampleImage} alt="" />
            <h5>Turf Name</h5>
            <p>Location</p>
          </div>
          <div className="court-content">
            <img src={sampleImage} alt="" />
            <h5>Turf Name</h5>
            <p>Location</p>
          </div>
          <div className="court-content">
            <img src={sampleImage} alt="" />
            <h5>Turf Name</h5>
            <p>Location</p>
          </div>
          <div className="court-content">
            <img src={sampleImage} alt="" />
            <h5>Turf Name</h5>
            <p>Location</p>
          </div>
          <div className="court-content">
            <img src={sampleImage} alt="" />
            <h5>Turf Name</h5>
            <p>Location</p>
          </div>
          <div className="court-content">
            <img src={sampleImage} alt="" />
            <h5>Turf Name</h5>
            <p>Location</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="footer">
          <div className="main">
            <div className="list">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>

            <div className="list">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>

            <div className="list">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>

            <div className="list">
              <h4>Connect</h4>
              <div className="social">
                <a href="#"><img src={facebookIcon} alt="facebook" /></a>
                <a href="#"><img src={instagramIcon} alt="instagram" /></a>
                <a href="#"><img src={twitterIcon} alt="twitter" /></a>
                <a href="#"><img src={linkdinIcon} alt="linkdin" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="end-text">
          <p>Copyright @2024 All rights reserved | Made with by Nasif Swalah</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;



