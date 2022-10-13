import React from 'react'

function Header({myname,day}) {

  return (
    <div className="header-container">
        This is Header
        {/* <p>{props.myname}</p>
        <p>{props.day}</p> */}
        <p>{myname}</p>
        <p>{day}</p>
      
    </div>
  )
}

export default Header