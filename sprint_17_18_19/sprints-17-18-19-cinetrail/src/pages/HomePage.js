import React from 'react'
import '../styles/home.css'
import Slider from '../components/Slider'

function HomePage({baseUrl,apiKey}) {


  return (
    <div className="homepage-container">
         <Slider apiKey={apiKey} baseUrl={baseUrl}/>
    </div>
  )
}

export default HomePage 