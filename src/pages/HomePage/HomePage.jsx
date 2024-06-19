import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './HomePage.css'
import sampleImage from '../../assets/turf sample.jpg'

const HomePage = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <section className="search-area" id='search-area'>
        <div className="search-area-text">
          <h1>Cleat connect</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel nulla quam officiis dolorem molestias iure sint modi distinctio temporibus,</p>
        </div>
      </section>

      <section className="turf-container">
        <div className="turf-conatiner-title">
          <h2>Lorem ipsum dolor stibus id Necessitatibus,</h2>
        </div>
        <div className="turf-content">
          <div className="box">
            <div className="turf-thumb">
              <img src={sampleImage} alt="sample image" />
              <h3>turf name 1</h3>
              <p>location</p>
            </div>
          </div>
          <div className="box">
            <div className="turf-thumb">
              <img src={sampleImage} alt="sample image" />
              <h3>turf name 1</h3>
              <p>location</p>
            </div>
          </div>
          <div className="box">
            <div className="turf-thumb">
              <img src={sampleImage} alt="sample image" />
              <h3>turf name 1</h3>
              <p>location</p>
            </div>
          </div>
          <div className="box">
            <div className="turf-thumb">
              <img src={sampleImage} alt="sample image" />
              <h3>turf name 1</h3>
              <p>location</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
