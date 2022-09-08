         

export const ItemDetail =({item} ) =>{

  return (
    <div className="container my-5">
    <h4>{item.nombre}</h4>
    <p>Precio: {item.precio}</p>
    <small>Stock disponible: {item.stock}</small>
    <p>{item.desc}</p>
    <a 
    href="https://hostalcasaelprado.com/"
    className="btn btn-primary my-2">Ver más</a>
</div>

  )


}

export default ItemDetail