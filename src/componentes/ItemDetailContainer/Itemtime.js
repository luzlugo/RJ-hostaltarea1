import { stock } from "./ItemDetail"

export const Itemtime = () => {
    return new Promise((resolve, reject)=> {
        
      setTimeout(() => {
          resolve (stock)
  
      }, 2000)
  
    
    
    })
  
  }