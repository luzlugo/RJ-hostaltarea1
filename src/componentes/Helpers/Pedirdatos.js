import { stock } from "../ItemList/Item"

export const pedirDatos = () => {
    return new Promise((resolve, reject)=> {
        
      setTimeout(() => {
          resolve (stock)
  
      }, 2000)
  
    
    
    })
  
  }