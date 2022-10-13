import React,{useState} from 'react'

function Header() {

  const [username,setUsername]= useState('John Doe') 
  const [imageUrl,setImageUrl]=useState('https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')

  const changeUser=()=>{
    setUsername('Jane Doe')
    setImageUrl("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
  }

  return (
    <div className="header-container">
        <div className="header-profile">
            <p>{username}</p>
            <img className="profile-img" src={imageUrl}  alt="user"/>
        </div>
        <button onClick={changeUser}>Change User</button>
    </div>
  )
}

export default Header