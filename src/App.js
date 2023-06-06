import './App.css'
import Boton from './components/boton'
import Contador from './components/contador'
import Logo from './imagenes/CC LOGO.png'
import { useState } from 'react'



function App () {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1); 
  }

  const reiniciarContador = () => {
    setNumClicks(0); 
  }

  return (
    <div className='App'>
      <div className='contenedordeimagen'>
        <img className='logo' src={Logo} alt=''></img>
      </div>
      <div className='Container'>
        <Contador numClicks={numClicks} />
        <Boton
          texto='Click'
          esBotondeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto='Reiniciar'
          esBotondeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  )
}

export default App
