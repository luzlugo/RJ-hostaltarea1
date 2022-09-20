import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.scss'; 
const Cart = () => {

  const {cart, CarTotal, emptyCart, removeItem} = useContext(CartContext) 

     return(
        <div className='Container1'>
           

        <main>
            <div className='card-compra'>
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
                    <button onClick={()=> removeItem(item.id)} className="btn btn-danger">-</button>
                    <hr/>
                   </div>

                    ))}  
                     
                                      
                    </div>
                  </div>
                 </div>
              </div>
              <div className='card__footer'>

             <div className='recommend'>
              <h4>Total: ${CarTotal()}</h4>          
              </div>
              <div className='action'>
              <button onClick={emptyCart} className="btn btn-danger" type='button'>Vaciar Carrito</button>
              </div>
             </div>
            </div>
          </main>
        
           
        </div>

         
          
          


    )

}

export default Cart