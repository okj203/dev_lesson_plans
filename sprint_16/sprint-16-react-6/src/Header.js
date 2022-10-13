import React,{useContext} from 'react'
import {ModeContext} from './context/ModeContext';

function Header() {

const {darkMode,setDarkMode}=useContext(ModeContext)

  return (
    <div className={darkMode ? "header header-dark" : "header"}>  
      <h2>Header</h2>
      <button className={darkMode ? "btn btn-dark" : "btn"} onClick={()=>setDarkMode(!darkMode)}>{darkMode ? "LightMode" : "DarkMode"}</button>
    </div>
  )
}

export default Header