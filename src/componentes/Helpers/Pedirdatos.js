import { stock } from "../ItemList/data"

export const pedirDatos = () => {
    return new Promise((resolve, reject)=> {
        
      setTimeout(() => {
          resolve (stock)
  
      }, 2000)
  
    
    
    })
  
  }