import React from 'react';
import '../stylesheet/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-container completada' : 'tarea-container'}>
      <div className='tarea-texto'
      onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-container-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono'/>
      </div>
    </div>
  )
}

export default Tarea;