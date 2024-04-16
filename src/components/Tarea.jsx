import React from 'react';
import '../stylesheet/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ texto, completada }) {
  return (
    <div className={completada ? 'tarea-container completeda' : 'tarea-container'}>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-container-iconos'>
        <AiOutlineCloseCircle className='tarea-icono'/>
      </div>
    </div>
  )
}

export default Tarea;