import React, { useState } from 'react'
import './TurfCreation.css'
import sampleImage from "../../assets/tennis.jpg"
import editIcon from "../../assets/editIcon.svg"
import deleteIcon from "../../assets/deleteIcon.svg"
import Navbar from '../../components/Navbar/Navbar'

const TurfCreation  = () => {

  const [imageFiles, setImageFiles] = useState([]);
  const [newTurfData, setNewTurfData] = useState({
    imageUrls: [],
    name: '',
    location: '',
    contactNumber: '',
    description: '',
    turfType: '',
    manager: '',
    createdBy: '',
  })
  return (
    <>
    <Navbar/>
      <div className="turf-creation-container">
        <div className="turf-creation-form-container">
            <form>
                <h3>Create New Turf</h3>
                <input type="text" placeholder='Turf name' name='name' className='creation-box'/>
                <input type="text" placeholder='Location' name='location' className='creation-box'/>
                <input type="number" placeholder='Contact Number' name='contactNumber' className='creation-box'/>
                <input type="text" placeholder='Type (eg: cricket, football, etc..)' name='type' className='creation-box'/>
                <textarea type="text" placeholder='Description' name='description' className='creation-box'/>
                <input type="file" accept='image/*' multiple name='images' className='creation-box'/>
                <button type='button' className='btn' >Create</button>
                <button type="button" className="btn cancel">
                Cancel
              </button>
            </form>
        </div>

        <div className="turf-creation-display">
            <table className="turf-creation-display-table">
                <thead>
                    <tr>
                        <th>Turf image</th>
                        <th>Turf name</th>
                        <th>Turf location</th>
                        <th colSpan="2" >Manage</th>
                    </tr>
                    <tr>
                        <td><img src={sampleImage} alt="turf tumb image"  height="100"/></td>
                        <td>Turf name</td>
                        <td>Turf location</td>
                        <td colSpan="2" className='manage-btns'>
                            <span><img src={editIcon} alt=""/></span>
                            <span><img src={deleteIcon} alt=""/></span>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
      </div>
    </>
  )
}

export default TurfCreation 
