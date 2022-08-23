
import hostal from './hostal.jpg';
import './App.css';
import Menupeludos from './Menupeludos';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          href="https://hostalcasaelprado.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={hostal} className="App-logoHostal" alt="logo" /> 
        </a>     
        
        <p>
         El lugar donde tus peludos y tu pueden hospedarse
        </p>
       
        <Menupeludos/>
      </header >
    </div>
  );
}

export default App;
