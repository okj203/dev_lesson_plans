import './App.css';
import React,{useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import {UserContext} from './context/UserContext'
import {ModeContext} from './context/ModeContext'

function App() {

  const [user,setUser]=useState('Ana');
  const [darkMode,setDarkMode]=useState(false)

  return (
    <ModeContext.Provider value={{darkMode,setDarkMode}}>
       <UserContext.Provider value={{user,setUser}}>
          <Header/>
          <HomePage/>
          <Footer/>
       </UserContext.Provider>
    </ModeContext.Provider>
   
  );
}

export default App;
