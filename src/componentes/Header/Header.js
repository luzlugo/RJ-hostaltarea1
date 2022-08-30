
import './Header.css';
import hostal from './hostal.jpg';
import Cartwidget from '../CartWidget/CartWidget';

const Header = () => {

  return(
     

<header className="bg-header">
        <div className='header-container'>
         <h1 >
         <a
          className="header-title"
          href="https://hostalcasaelprado.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={hostal} className="App-logoHostal" alt="logo" /> 
        </a> 
         </h1>
          <nav className="header-navbar">
            <a 
            className="header-navlink"
            href="https://hostalcasaelprado.com/"
            target="_blank"
            rel="noopener noreferrer">
              MASCOTAS
              </a>
            <a className="header-navlink"
            href="https://hostalcasaelprado.com/"
            target="_blank"
            rel="noopener noreferrer">
            HABITACIONES</a>
            <a className="header-navlink"
            href="https://hostalcasaelprado.com/"
            target="_blank"
            rel="noopener noreferrer">
            TOURES</a>
          </nav>
          
          <Cartwidget/>
          
        </div>
       
      
       
      </header >

      
  );
  
  }
  
  export default Header