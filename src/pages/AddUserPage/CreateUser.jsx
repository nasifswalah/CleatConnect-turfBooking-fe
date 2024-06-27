import React from 'react'
import Navbar from '../../components/Navbar/Navbar'


const CreateUser = () => {
  return (
    <>
    <Navbar/>
      <div className="turf-creation-container add-user-form">
          <div className="turf-creation-form-container">
            <form>
              <h3>Add New User</h3>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="creation-box"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="creation-box"
              />
              <input
                type="number"
                placeholder="Contact Number"
                name="contactNumber"
                className="creation-box"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="creation-box"
              />
              <button type="button" className="btn">
                Create
              </button>
              <button type="button" className="btn cancel">
                Cancel
              </button>
            </form>
          </div>
        </div>
    </>
  )
}

export default CreateUser
