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

function App() {
   

  return (
   
       <BrowserRouter>

         <Header/>
         <Routes>


          
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
          <Route path='*' element={<h2>Pagina no existe</h2>} ></Route>

       
         </Routes>


      </BrowserRouter>

  
  );
}

export default App;
