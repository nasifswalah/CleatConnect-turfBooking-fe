import React, { useEffect, useState } from "react";
import "./CourtDetails.css";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import Navbar from "../../components/Navbar/Navbar";
import { ErrorToast, successToast } from "../../constants/toast";
import { useNavigate, useParams } from "react-router-dom";
import { TIMINGS } from "../../constants/timings.js";

const CourtDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [openSlotModal, setOpenSlotModal] = useState(false);
  const [selectedTurfData, setSelectedTurfData] = useState({});
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [timings, setTimings] = useState(TIMINGS);
  const [openSlotList, setOpenSlotList] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [slotData, setSlotData] = useState({});
  

  useEffect(() => {
    const fetchUpdates = async () => {
      const turfId = params.turfId;
      try {
        const res = await fetch(`/api/user/get-turf/${turfId}`);
        const data = await res.json();
        if (data.success === false) {
          ErrorToast(data.message);
          return;
        }
        setSelectedTurfData(data.data);
      } catch (error) {
        ErrorToast(error.message);
      }
    };
    fetchUpdates();
  }, []);

  const handleSlotSelection = (e, slot) => {
    e.stopPropagation()
    setSelectedSlots(
     [ ...selectedSlots,
      slot,]
    );

    const newTimes = timings.filter((element) => element.id !== slot.id);
    setTimings(newTimes);
    setOpenSlotList(false)
    console.log(selectedSlots);
  };

  const today = new Date().toISOString().split('T')[0];

  const handleSlotCreation = async () => {
    try {
      const res = await fetch('/api/manager/create-slot', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...slotData,
          turfId: params.turfId,
          selectedSlots: selectedSlots
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        ErrorToast(data.message);
        console.log(data);
        return;
      }
      successToast(data.message);
      setOpenSlotModal(false);
    } catch (error) {
      ErrorToast(error.message);
    }
  }

  const handleChange = (e) =>{
    setSlotData({
      ...slotData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <header className="court-details-header">
          <h1 className="court-name">{selectedTurfData.name} </h1>
        </header>
        <div className="main-container">
          <div className="left-detail-container">
            <h3 className="court-detail-titles">Location</h3>
            <p className="court-detail-content">{selectedTurfData.location}</p>
            <h3 className="court-detail-titles">Contact Number</h3>
            <p className="court-detail-content">
              {selectedTurfData.contactNumber}
            </p>
            <h3 className="court-detail-titles">Type</h3>
            <p className="court-detail-content">{selectedTurfData.turfType}</p>
            <h3 className="court-detail-titles">Discription</h3>
            <p className="court-detail-content">
              {selectedTurfData.description}
            </p>

            <ul>
              <li>
                <img src={facebookIcon} alt="facebook" />
              </li>
              <li>
                <img src={instagramIcon} alt="instagram" />
              </li>
            </ul>

            <button className="btn" onClick={() => setOpenBookingModal(true)}>
              Book
            </button>
            <button
              className="btn add-slot"
              onClick={() => setOpenSlotModal(true)}
            >
              Add slot
            </button>
          </div>
          <div className="right-photos-container">
            <div className="court-photos">
              {selectedTurfData.imageUrls?.length > 0 &&
                selectedTurfData.imageUrls?.map((photo) => (
                  <img src={photo} key={photo} alt="photo" />
                ))}
            </div>
          </div>
        </div>
        {openBookingModal && (
          <div className="select-slot-modal">
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
                  <div className="slot-display">
                    <span>1am - 2am</span>
                  </div>
                  <input type="button" className="btn" value="Confirm" />
                  <input
                    type="button"
                    className="btn cancel"
                    onClick={() => setOpenBookingModal(false)}
                    value="Cancel"
                  />
                </form>
              </div>
            </div>
          </div>
        )}
        {openSlotModal && (
          <div className="select-slot-modal">
            <div className="turf-creation-container slot-modal">
              <div className="turf-creation-form-container">
                <form>
                  <h3>Add slots</h3>
                  <p>From</p>
                  <input
                    type="date"
                    min={today}
                    placeholder="Turf name"
                    name="startDate"
                    className="creation-box"
                    defaultValue={today}
                    onChange={handleChange}
                    required
                  />
                  <p>To</p>
                  <input
                    type="date"
                    min={today}
                    placeholder="Turf name"
                    name="endDate"
                    className="creation-box"
                    defaultValue={today}
                    onChange={handleChange}
                    required
                  />
                  <p>Cost</p>
                  <input
                    type="number"
                    min={today}
                    placeholder="Turf name"
                    name="cost"
                    className="creation-box"
                    value={slotData.cost}
                    onChange={handleChange}
                    required
                  />
                  <p onClick={() => setOpenSlotList(true)} className="slot-selector">Select slots</p>
                  {openSlotList && <ul className="creation-box creation-list">
                    {timings.map((slot) => (
                      <li onClick={(e) => handleSlotSelection(e, slot)}>
                        {slot.name}
                      </li>
                    ))}
                  </ul>}

                  <div className="slot-display">
                    {selectedSlots.map((slot) => (
                      <span>{slot.name}</span>
                    ))}
                  </div>
                  <input type="button" className="btn" value="Confirm" onClick={handleSlotCreation} />
                    
                  <input
                    type="button"
                    className="btn cancel"
                    onClick={() => setOpenSlotModal(false)}
                    value="Cancel"
                  />
                   
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourtDetails;
