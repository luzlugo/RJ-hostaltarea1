import TarjetasItemDesc from "./TarjetasItemDesc"
import './TarjetasItem.css'
export const TarjetasItem =({productos = []} ) =>{

   return (

       
     <div  className="container my-5">
        
      
       {productos.map((prod) => {
         return <TarjetasItemDesc producto={prod} key={prod.id}/>
          
      })}
    </div>
   )


}

export default TarjetasItem

