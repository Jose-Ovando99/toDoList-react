import './App.css'
import freeCodeCampLogo from './assets/freecodecamp-logo.png'
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-container'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
