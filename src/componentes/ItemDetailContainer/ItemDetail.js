import './ItemDetail.css'; 

export const ItemDetail =({item} ) =>{

  return (
<div className="body">


<div id="container">	
	
    <div class="product-details">
      
      
    <h1>{item.nombre}</h1>
   		
    <span class="hint-star star">
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star" aria-hidden="true"></i>
      <i class="fa fa-star-half-o" aria-hidden="true"></i>
      <i class="fa fa-star-o" aria-hidden="true"></i>
    </span>
      
      <p class="information">" 
      La pulsera es un objeto de joyería que sirve para que los clientes la utilicen en sus muñecas como símbolo de belleza. De esta manera, su geometría suele ser redonda, o una forma similar, para adaptarse a la forma de esta parte del cuerpo.
    </p>      
      
   	
  <div class="control">
    
           <a 
           href="https://hostalcasaelprado.com/"
           className="btn btn-primary my-5">Comprar</a>
  
    
  </div>
        
  </div>    
  <div class="product-image">
    
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Iran-bracelet.jpg" alt="Omar Dsoky"/>
    
  
  <div class="info">
    <h2>The Description</h2>
    <ul>
      <li><strong>Sun Needs: </strong>Full Sun</li>
      <li><strong>Soil Needs: </strong>Damp</li>
      <li><strong>Zones: </strong>9 - 11</li>
      <li><strong>Height: </strong>2 - 3 feet</li>
      <li><strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall</li>
      <li><strong>Features: </strong>Tolerates heat</li>
    </ul>
  </div>
  </div> 
  
  
  </div>




   
</div>

  )


}

export default ItemDetail