import React from "react";
import "./Profile.css";
import cameraIcon from "../../assets/cameraIcon.svg";
import addUserIcon from "../../assets/addUserIcon.svg"
import addNewCourtIcon from "../../assets/addNewCourt.svg"
import showMyCourtIcon from "../../assets/showMyCourtIcon.svg"
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();
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
            <h3 className="username">{currentUser.data.name}</h3>
            <p className="user-subname">{currentUser.data.role}</p>
          </div>
        </div>
        <div className="card-content">
          <div className="left-content">
            <div className="profile-container">
              <h3 className="detail-title">Email</h3>
              <p className="detail-data">{currentUser.data.email}</p>
              <h3 className="detail-title">Mobile Number</h3>
              <p className="detail-data">{currentUser.data.contactNumber}</p>
            </div>
            <div className="buttons-container">
              { currentUser.data.role === "admin" && <> <span className="icon"><img src={addUserIcon} alt="icon" onClick={()=>navigate('/create-new-user')}/></span>
              <span className="icon"><img src={addNewCourtIcon} alt="icon" onClick={()=>navigate('/create-new-turf')} /></span> </>}
              <span className="icon"><img src={showMyCourtIcon} alt="icon" /></span>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
