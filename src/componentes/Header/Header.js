
import './Header.css';
import hostal from './hostal.jpg';
import Cartwidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom'

const Header = () => {

  return(
     

<header className="bg-header">
        <div className='header-container'>
        <Link to='/' className="header-navlink">
          
        <img src={hostal} className="App-logoHostal" alt="logo" /> 
          </Link>
          
     
          <nav className="header-navbar">
            <Link to='/Productos/collares'className="header-navlink">Collares </Link>
            <Link to='/Productos/anillos'className="header-navlink">Anillos </Link>
            <Link to='/Productos/pulseras'className="header-navlink">Pulseras </Link>
          </nav>
          
          <Cartwidget/>
          
        </div>
       
      
       
      </header >

      
  );
  
  }
  
  export default Header