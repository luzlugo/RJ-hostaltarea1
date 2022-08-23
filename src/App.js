import logo from './pet.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         El lugar donde tus peludos y tu pueden hospedarse en:
        </p>
        <a
          className="App-link"
          href="https://hostalcasaelprado.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Casa Hostal el prado en Cartagena
        </a>
      </header>
    </div>
  );
}

export default App;
