import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.scss'; 
const Cart = () => {

  const {cart} = useContext(CartContext) 

     return(
        <div className='Container1'>
           

        <main>
            <div className='card'>
              <div className='card__title'>
                <div className='icon'>
                  <a href='#'><i className='fa fa-arrow-left'></i></a>
                </div>
                <h3>Mis compras</h3>
              </div>
              <div className='card__body'>
               
                <div className='half'>
                  <div className='description'>
                  <div className='featured_text'>
                    <p className='price'>Lista de productos</p>
                    
                    { cart.map((item) =>(

                   <div key={item.id}>
                    <hr/>
                    <h3>{item.nombre}</h3>
                    <p> Categoria: {item.tipo}</p>
                    <p> Precio: {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <hr/>
                   </div>

                    ))}  
                    
                                      
                    </div>
                  </div>
                 </div>
              </div>
            
            </div>
          </main>
        
           
        </div>

         
          
          


    )

}

export default Cart