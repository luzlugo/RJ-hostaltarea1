export const TarjetasItemDesc =({producto} ) =>{

    return (
       <div>
           <img 
           alt="habitacion"
           src={producto.img}/>
           <h4 className="pruebaTitulo">{producto.nombre}</h4>
           <p className="pruebaprecio">Precio: {producto.precio}</p>
           <small className="pruebastock">Stock disponible: {producto.stock}</small>
           <p>{producto.desc}</p>
           <a 
           href="https://hostalcasaelprado.com/"
           className="btn btn-primary my-2">Ver más</a>
      </div>
  
    )
 
 
 }
 
 export default TarjetasItemDesc