import React,{useContext} from 'react'
import Profile from './Profile'
import Form from './Form'
import {ModeContext} from './context/ModeContext';
 

function HomePage() {
  const {darkMode,setDarkMode}=useContext(ModeContext)

  return (
    <div className={darkMode ? "home home-dark":"home"}>
       <h2>HomePage</h2> 
       <Profile/>
       <Form/>
    </div>
  )
}

export default HomePage