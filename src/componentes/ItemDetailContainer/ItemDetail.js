         

export const ItemDetail =({item} ) =>{

  return (
<div className="container my-5">
      <img src={item.img}/>
      <h3>{item.nombre}</h3>
      <small>Stock disponible: {item.stock}</small>
      <p>{item.desc}</p>
      <p>Precio: {item.precio}</p>
      <a 
      href="https://hostalcasaelprado.com/"
      className="btn btn-primary my-2">Ver más</a>
</div>

  )


}

export default ItemDetail