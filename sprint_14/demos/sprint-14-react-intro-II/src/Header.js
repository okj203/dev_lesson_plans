import React, { Component } from 'react'

export default class Header extends Component {

  constructor(){
    super()
    this.state={
      username:"John Doe",
      image_url:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }

  }

 changeUser=()=>{
    this.setState({
      username:"Jane Doe",
      image_url:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    })
 }






  render() {
    //jsx
    return (
      <div className="header-container">
        <div className="header-profile">
           <p>{this.state.username}</p>
           <img className="profile-img" src={this.state.image_url}/>
        </div>
        <button onClick={this.changeUser}>Change User</button>
      </div>
    )
  }
}