import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import shoppingcart from './shoppingcart.png';
import { CartContext } from '../../context/CartContext';

const Cartwidget = () => {

   const {cartQuantity} = useContext(CartContext)

  return(
     

<header className="bg-header">
        <div className='header-container'>
         <Link to='/cart'>
         
          <img src={shoppingcart} className="App-logocart" alt="logo" /> 
          </Link>
           <span>{cartQuantity()}</span>
        </div>
       
      
       
      </header >

      
  );
  
  }
  
  export default Cartwidget