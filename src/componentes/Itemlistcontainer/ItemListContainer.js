import { useEffect, useState } from "react"
//import { pedirDatos } from "../Helpers/Pedirdatos"
import {ItemList} from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"
import {db} from '../../firebase/config'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)  
    const {categoryId} =useParams()

 useEffect(() => {
   setLoading(true)
     //armar referencia 
    const productosRef = collection(db, 'productos') 
    // consumir
    getDocs(productosRef)
    .then((resp) => {
      const productosDB = resp.docs.map((doc)=> ({id: doc.id, ...doc.data()}) )
      console.log(productosDB)

      setProductos(productosDB)
    })
    .finally (() => {
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
