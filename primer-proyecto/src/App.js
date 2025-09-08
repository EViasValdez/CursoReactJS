import logo from './logo.svg';
import './App.css';
import Welcome from "./componentes/Welcome.js";

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Programa para probar las funciones de ReactJS.
          </p>
          <Welcome Mensaje="Bienvenido props" Nombre="Eduardo"/>
        </header>
      </div>
    );
}

export default App;