import './ItemDetail.scss'; 
import ItemCounter from '../Contador/ItemCounter';
import { useContext, useState } from "react"
import { CartContext } from '../../context/CartContext';


export const ItemDetail =({item} ) =>{

  const [cantidad, setCantidad] = useState(1)

  const handleAgregar  =() => {
    const itemToCart = {
       id:item.id,
       precio: item.precio,
       nombre:item.nombre,
       cantidad
    }
      console.log(itemToCart)
   // console.log ({
     //    ...item,
      //   cantidad
    //})
}


  return (
<div className='Container1'>


<main>
    <div className='card'>
      <div className='card__title'>
        <div className='icon'>
          <a href='#'><i className='fa fa-arrow-left'></i></a>
        </div>
        <h3>New products</h3>
      </div>
      <div className='card__body'>
        <div className='half'>
          <div className='featured_text'>
            <h1>{item.nombre}</h1>
            <p className='sub'>{item.tipo}</p>
            <p className='price'>Precio: {item.precio}</p>
          </div>
          <div className='image'>
            <img src={item.img} alt=''/>
          </div>
        </div>
        <div className='half'>
          <div className='description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.</p>
          </div>
          <span className='stock'><i className='fa fa-pen'></i> In stock</span>
          <div className='reviews'>
            <ul className='stars'>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star'></i></li>
              <li><i className='fa fa-star-o'></i></li>
            </ul>
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div className='card__footer'>
        <div className='recommend'>
        <ItemCounter 
        max={item.stock}
        counter={cantidad}
        setCounter={setCantidad}
        handleAgregar={handleAgregar}
        item={item}
        />
        </div>
      </div>
    </div>
  </main>

   
</div>

  )


}

export default ItemDetail