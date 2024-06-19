import React from 'react'
import './Profile.css'
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';

const Profile = () => {

    const { currentUser } = useSelector((state) => state.user);

  return (
    <>
    <Navbar/>
    <div className="profile-container">
      <h1 className="profile-text">Profile</h1>
      <form  className="profile-data">
        <input
          type="text"
          placeholder="username"
          defaultValue={currentUser.data.name}
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          defaultValue={currentUser.data.email}
          id="email"
        />
        <input
          type="text"
          placeholder="role"
          defaultValue={currentUser.data.role}
          id="role"
        />
      </form>
    </div>
    </>
  );
}

export default Profile
