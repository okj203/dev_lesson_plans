import React,{useContext} from 'react'
import {ModeContext} from './context/ModeContext';

function Footer () {
  const {darkMode,setDarkMode}=useContext(ModeContext)
  return ( 
    <div className={darkMode ? "footer footer-dark" : "footer"}>
        <h2>Footer</h2>
    </div>
  )
}

export default Footer