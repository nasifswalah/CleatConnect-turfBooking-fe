import React from 'react'
import './CourtDetails.css'
import facebookIcon from "../../assets/facebook.svg"
import instagramIcon from "../../assets/instagram.svg"
import sampleImage from "../../assets/tennis.jpg"

const CourtDetails = () => {
  return (
    <div className='main-wrapper'>
      <header className='court-details-header'>
        <h1 className='court-name'>The New Court </h1>
      </header>
      <div className="main-container">
        <div className="left-detail-container">
            <h3 className="court-detail-titles">Location</h3>
            <p className='court-detail-content'>Rippon</p>
            <h3 className="court-detail-titles">Contact Number</h3>
            <p className='court-detail-content'>1234567890</p>
            <h3 className="court-detail-titles">Type</h3>
            <p className='court-detail-content'>Football</p>
            <h3 className="court-detail-titles">Discription</h3>
            <p className='court-detail-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero alias maxime qui sapiente at. Nulla necessitatibus expedita aliquam incidunt!</p>

            <ul>
                <li><img src={facebookIcon} alt="" /></li>
                <li><img src={instagramIcon} alt="" /></li>
            </ul>

            <button className='btn'>Book</button>
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
    </div>
  )
}

export default CourtDetails
