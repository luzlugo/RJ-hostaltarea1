//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../componentes/Header/Header';
//import NavScrollExample from './componentes/Header/menu/Menu';
import ItemListContainer from '../componentes/Itemlistcontainer/ItemListContainer';
//import Nosotros from '../componentes/Nosotros/Nosotros';
//import Contacto from '../componentes/Contacto/Contacto';
//import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from '../context/CartContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
import Cart from '../componentes/Cart/Cart';

function App() {
   
  const [cart, setCart] = useState([])
   
  const addToCart = (item) => {
    setCart([...cart,item])
  }

  const IsInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const cartQuantity = () => {
      return cart.reduce ((acc, item)=> acc + item.cantidad, 0)
  }

  const CarTotal = () => {
    return cart.reduce ((acc, item)=> acc + item.cantidad * item.precio, 0)
  }

  const emptyCart = () => {
      setCart([])
  }
 
  const removeItem = (id) => {
    setCart( cart.filter((item) => item.id !== id))
  }
  return (
    <CartContext.Provider value={{
      cart,
     addToCart,
     IsInCart,
     cartQuantity,
     CarTotal,
     emptyCart,
     removeItem
    }}>
       <BrowserRouter>

         <Header/>
         <Routes>


          
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<h2>Pagina no existe</h2>} ></Route>

          <Route path='/Cart' element={<Cart/>}></Route>
         </Routes>


      </BrowserRouter>

    </CartContext.Provider>
  );
}

export default App;
