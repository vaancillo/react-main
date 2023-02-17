import { useState } from "react"

const Tareas = () => {

   const [tareas, setTareas] = useState([
      {
         id: 1,
         texto: 'Ir al cine',     
         fecha: '15 de Febrero de 2023',
         terminada: true,
      },
      {  
         id: 2,
         texto: 'Comprar en el supermercado', 
         fecha: '15 de Febrero de 2023', 
         terminada: false,
      },
      {
         id: 3,
         texto: 'Hacer app en React',
         fecha: '15 de Febrero de 2023', 
         terminada: false,
         
      }
      ])

  return ( 
    <>
       {tareas.map((tarea) => (<h3 key={tarea.id}>{tarea.texto}</h3>))}
    </>
  )
}

export default Tareas