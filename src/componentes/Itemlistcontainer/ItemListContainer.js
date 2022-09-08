import { useEffect, useState } from "react"
import { pedirDatos } from "../Helpers/Pedirdatos"
import {ItemList} from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
  
    const {categoryId} =useParams()
   console.log(categoryId)

 useEffect(() => {
   setLoading(true)

   pedirDatos()
    .then((res) => {
      if (!categoryId){
        setProductos(res)

      }else{
        setProductos(res.filter((prod)=> prod.category === Number(categoryId)))

      }
       

    })
    .catch((error) => {
        console.log(error)
    })
    .finally(()=> {
      setLoading(false)
    })
 }, [categoryId])
 

    return (
        <div>
            {

              loading
              ? <h2>Cargando...</h2>
              :  <ItemList productos={productos}/>

            }
           
        </div>
    )
}

export default ItemListContainer
