import React,{useContext} from 'react'
import {UserContext} from './context/UserContext';
import {ModeContext} from './context/ModeContext';

function Profile() {
    const {user,setUser}=useContext(UserContext) 
    const {darkMode,setDarkMode}=useContext(ModeContext)


  return (
    <div className={darkMode ? "profile profile-dark" : "profile"}>
        <h2>Profile</h2>
        <p>{user}</p>
    </div>
  )
}

export default Profile