import { useState } from "react"

const Contador = () => {

    const [counter, setCounter] = useState(0)

    const handleSumar = () => {
         setCounter(counter + 1)

    }

    const handleRestar =()=> {
      if (counter > 0 ) {
           setCounter(counter-1)

      }

    }


     return(
        
       <div className="container my-s">

             <h2>Contador</h2>
              <hr/>
              <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
              <span className="mx-2">{counter}</span>
              <button onClick={handleSumar} className="btn btn-outline-primary">+</button>
              
              <hr/>
       </div>


     )


}


export default Contador