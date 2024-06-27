import React, { useState } from "react";
import "./CourtDetails.css";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import sampleImage from "../../assets/tennis.jpg";
import Navbar from "../../components/Navbar/Navbar";

const CourtDetails = () => {

  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [openSlotModal, setOpenSlotModal] = useState(false);

  return (
    <>
    <div className="main-wrapper">
    <Navbar/>
      <header className="court-details-header">
        <h1 className="court-name">The New Court </h1>
      </header>
      <div className="main-container">
        <div className="left-detail-container">
          <h3 className="court-detail-titles">Location</h3>
          <p className="court-detail-content">Rippon</p>
          <h3 className="court-detail-titles">Contact Number</h3>
          <p className="court-detail-content">1234567890</p>
          <h3 className="court-detail-titles">Type</h3>
          <p className="court-detail-content">Football</p>
          <h3 className="court-detail-titles">Discription</h3>
          <p className="court-detail-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
            alias maxime qui sapiente at. Nulla necessitatibus expedita aliquam
            incidunt!
          </p>

          <ul>
            <li>
              <img src={facebookIcon} alt="" />
            </li>
            <li>
              <img src={instagramIcon} alt="" />
            </li>
          </ul>

          <button className="btn" onClick={()=>setOpenBookingModal(true)}>Book</button>
          <button className="btn add-slot" onClick={()=>setOpenSlotModal(true)} >Add slot</button>
        </div>
        <div className="right-photos-container">
          <div className="court-photos">
            <img src={sampleImage} alt="photo" />
            <img src={sampleImage} alt="photo" />
            <img src={sampleImage} alt="photo" />
            <img src={sampleImage} alt="photo" />
            <img src={sampleImage} alt="photo" />
            <img src={sampleImage} alt="photo" />
            <img src={sampleImage} alt="photo" />
          </div>
        </div>
      </div>
      { openBookingModal && <div className="select-slot-modal">
        <div className="turf-creation-container slot-modal">
          <div className="turf-creation-form-container">
            <form>
              <h3>Book slots</h3>
              <input
                type="date"
                placeholder="Turf name"
                name="name"
                className="creation-box"
              />
              <p>Select slots</p>
              <div className='slot-display'>
                      <span>1am - 2am</span>
                    </div>
              <button type="button" className="btn">
                Confirm
              </button>
              <button type="button" className="btn cancel" onClick={()=>setOpenBookingModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>}
      { openSlotModal && <div className="select-slot-modal">
        <div className="turf-creation-container slot-modal">
          <div className="turf-creation-form-container">
            <form>
              <h3>Add slots</h3>
              <input
                type="date"
                placeholder="Turf name"
                name="name"
                className="creation-box"
              />
              <p>Select slots</p>
              <div className='slot-display'>
                      <span>1am - 2am</span>
                    </div>
              <button type="button" className="btn">
                Confirm
              </button>
              <button type="button" className="btn cancel" onClick={()=>setOpenSlotModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>}
    </div>
    </>
  );
};

export default CourtDetails;
