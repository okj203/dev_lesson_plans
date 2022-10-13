
import './App.css';
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'

function App() {

  const username = 'Elif';
  const day='Tuesday'

  return ( 
    //JSX
    <div className="container">
      <Header myname={username} day={day}/>
      <HomePage myname={username} day={day}/>
      <Footer/>
    </div>

  );
}

export default App;
