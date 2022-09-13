
import { useEffect, useState } from "react"
import { pedirDatos } from "../Helpers/Pedirdatos"
import {TarjetasItem} from "../TarjetasItem/TarjetasItem"

export const ItemList =({productos = []} ) =>{

export const ItemList = () => {
    const [productos, setProductos] = useState([])
  
   console.log(productos)


 useEffect(() => {
   pedirDatos()
    .then((res) => {
       setProductos(res)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(()=> {
      //console.log("Fin del proceso")
    })
 }, [])
 

    return (
        <div>
            <TarjetasItem productos={productos}/>
        </div>
    )
}

export default ItemList

