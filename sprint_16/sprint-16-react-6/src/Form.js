import React,{useContext} from 'react'
import {ModeContext} from './context/ModeContext';


function Form() {
  const {darkMode,setDarkMode}=useContext(ModeContext)

  return (
    <div className={darkMode ? "form form-dark" : "form"}> 
        <h2>Form</h2>
    </div>
  )
}

export default Form