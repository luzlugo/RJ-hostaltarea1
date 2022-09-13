import { useEffect, useState } from "react"
import { pedirDatos } from "../Helpers/Pedirdatos"
import {useParams} from 'react-router-dom'
import {ItemDetail} from '../ItemDetailContainer/ItemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)  
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

   console.log(itemId)

 useEffect(() => {
     
  setLoading(true)

    pedirDatos()
       .then((res) => {
          setItem(res.find((prod)=> prod.item === Number(itemId)))

       })
        .catch(err => console.log (err))
        
        .finally(()=> {
          setLoading(false)
        })
  
    }, [itemId])
 

    return (
        <div>
         
            {

              loading
              ? <h2>Cargando...</h2>
              :  <ItemDetail item={item}/>

            } 

        </div>
    )
}

export default ItemDetailContainer
