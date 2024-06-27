import React from "react";
import "./Profile.css";
import cameraIcon from "../../assets/cameraIcon.svg";
import addUserIcon from "../../assets/addUserIcon.svg"
import addNewCourtIcon from "../../assets/addNewCourt.svg"
import showMyCourtIcon from "../../assets/showMyCourtIcon.svg"
import Navbar from "../../components/Navbar/Navbar";

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <div className="card-main">
            <div className="profile-image">
              <div className="upload-image">
                <img src={cameraIcon} alt="camera icon" />
              </div>
            </div>
            <h3 className="username">Nasif</h3>
            <p className="user-subname">User</p>
          </div>
        </div>
        <div className="card-content">
          <div className="left-content">
            <div className="profile-container">
              <h3 className="detail-title">Email</h3>
              <p className="detail-data">Nasif</p>
              <h3 className="detail-title">Mobile Number</h3>
              <p className="detail-data">1234567890</p>
            </div>
            <div className="buttons-container">
              <span className="icon"><img src={addUserIcon} alt="" /></span>
              <span className="icon"><img src={addNewCourtIcon} alt="" /></span>
              <span className="icon"><img src={showMyCourtIcon} alt="" /></span>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
