import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  const apiKey="14bc3e16a8c419d4790d6b5dffe899fa";
  const baseUrl="https://api.themoviedb.org/3"



  return (
    <div>
       <Header/>
       <HomePage apiKey={apiKey} baseUrl={baseUrl}/>
       <Footer/>
    </div>
  );
}

export default App;
