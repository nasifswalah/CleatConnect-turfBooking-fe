import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const TurfUpdation = () => {
  return (
    <>
    <Navbar/>
      <div className="turf-creation-container">
        <div className="turf-creation-form-container">
            <form>
                <h3>Update Turf</h3>
                <input type="text" placeholder='Turf name' name='name' className='creation-box'/>
                <input type="text" placeholder='Location' name='location' className='creation-box'/>
                <input type="number" placeholder='Contact Number' name='contactNumber' className='creation-box'/>
                <input type="text" placeholder='Type (eg: cricket, football, etc..)' name='type' className='creation-box'/>
                <textarea type="text" placeholder='Description' name='description' className='creation-box'/>
                <input type="file" accept='image/*' multiple name='images' className='creation-box'/>
                <button type='button' className='btn' >Update</button>
                <button type='button' className='back btn' >Back</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default TurfUpdation
