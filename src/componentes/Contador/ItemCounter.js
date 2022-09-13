import './Contador.css'

const ItemCounter = ({max, counter, setCounter, handleAgregar }) => {

    const handleRestar =()=> {
     if(counter > 1 ){
          setCounter(counter-1)
     }   

    }

    const handleSumar = () => {

       if(counter < max){
          setCounter(counter + 1)
     }       

    }    

     return(
        
       <div className="container contador my-s">
             <div>
             <h2>Contador</h2>
              <hr/>
              <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
              <span className="mx-2">{counter}</span>
              <button onClick={handleSumar} className="btn btn-outline-primary">+</button>
              
              <hr/>
              </div>
        <div className='action'>
          <button onClick={handleAgregar} type='button'>Add to cart</button>
        </div>             
       </div>


     )


}


export default ItemCounter