import TarjetasItemDesc from "./TarjetasItemDesc"

export const TarjetasItem =({productos = []} ) =>{

   return (

       
     <div  className="container my-5">
         <h2>Productos</h2>
           <hr/>
      
       {productos.map((prod) => {
         return <TarjetasItemDesc producto={prod} key={prod.id}/>
          
      })}
    </div>
   )


}

export default TarjetasItem

