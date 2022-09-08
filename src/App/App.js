//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../componentes/Header/Header';
//import NavScrollExample from './componentes/Header/menu/Menu';
import ItemListContainer from '../componentes/Itemlistcontainer/ItemListContainer';
//import Nosotros from '../componentes/Nosotros/Nosotros';
//import Contacto from '../componentes/Contacto/Contacto';
//import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

         <Header/>
         <Routes>


          
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/Productos/:categoryId' element={<ItemListContainer/>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>

          {/*<Route path='/Contacto' element={<Contacto/>}></Route>
          <Route path='/Nosotros' element={<Nosotros/>}></Route>*/}
         </Routes>

        {/*<Nosotros/>
         <Contacto/>      
  <ItemListContainer/>*/}

      </BrowserRouter>

  </div>
  );
}

export default App;
