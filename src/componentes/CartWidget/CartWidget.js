
import './CartWidget.css';
import shoppingcart from './shoppingcart.png';

const Cartwidget = () => {

  return(
     

<header className="bg-header">
        <div className='header-container'>
        
         <a
          className="header-title"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={shoppingcart} className="App-logocart" alt="logo" /> 
        </a> 
       
        </div>
       
      
       
      </header >

      
  );
  
  }
  
  export default Cartwidget