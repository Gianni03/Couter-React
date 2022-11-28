
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import fccLogo from './img/fcc_primary_large.svg';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);


  const sumarContador = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = ()=> {
    setNumClicks(0)
  }

  return (
    <div className="App">
    <div className="freecodecamp-logo-contenedor">
      <img className='freecodecamp-logo' src={fccLogo} alt="logo de freeCodeCamp" />
    </div>

    <div className="contenedor-principal">

    <Contador numClicks={numClicks} />

      <Boton 
      texto='Click' 
      esBotonDeClick={true}
      manejarClick={sumarContador} />

      <Boton 
      texto='Reiniciar'
      esBotonDeClick={false}
      manejarClick={reiniciarContador} />
    </div>

      
    </div>
  );
}


export default App;
