import React,{useState,useEffect} from 'react'
import Profile from './Profile'
import Form from './Form'
import axios from 'axios'

function HomePage() {

  const [title,setTitle]=useState("Quotes")
  const [urlOne,setUrlOne]=useState("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
  const [urlTwo,setUrlTwo]=useState('https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')

  const [quoteOne,setQuoteOne]=useState('')
  const [quoteTwo,setQuoteTwo]=useState('')


  useEffect(()=>{
    // fetch('https://quote-garden.herokuapp.com/api/v3/quotes')
    // .then(res=>res.json())
    // .then(data=>{
    //   setQuoteOne(data.data[0].quoteText)
    //   setQuoteTwo(data.data[2].quoteText)
    // })
    // .catch(err=>console.log(err))

   axios.get('https://quote-garden.herokuapp.com/api/v3/quotes')
   .then(res=>{
    console.log(res.data.data[0].quoteText)
      setQuoteOne(res.data.data[0].quoteText)
      setQuoteTwo(res.data.data[2].quoteText)
   })
   .catch(err=>console.log(err))


  },[])

  const changeTitle = ()=>{
    setTitle("My Quotes")
  }


  return (
    <div className="homepage-container">
      <h1>{title}</h1>
      <Profile image={urlOne} quote={quoteOne} changeTitle={changeTitle} title={title}/>
      <Profile image={urlTwo} quote={quoteTwo} changeTitle={changeTitle} title={title}/>
      <Form/>
   
    </div>
  )
}

export default HomePage