import React, { Component } from 'react'
import Profile from './Profile'
import Form from './Form'

export default class HomePage extends Component {
  constructor(){
    super()
    this.state={
      title:"Quotes",
      quote_one:"",
      quote_two:"",
      url_one:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      url_two:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    
    }

  }

  componentDidMount(){
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        quote_one:data.data[0].quoteText,
        quote_two:data.data[2].quoteText
      })

    })
    .catch(err=>console.log(err))
  }

  changeTitle=()=>{
    this.setState({
      title:"My Quotes"
    })
  }

 
  render() {
    return (
      <div className="homepage-container">
        <h1>{this.state.title}</h1>
        <Profile quote={this.state.quote_one} url={this.state.url_one} title={this.state.title} changeTitle={this.changeTitle}/>
        <Profile quote={this.state.quote_two} url={this.state.url_two} title={this.state.title} changeTitle={this.changeTitle}/>
        <Form/>
      </div>
    )
  }
}
