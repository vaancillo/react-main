import Header from "./componets/Header"
import Tareas from "./componets/Tareas"
import AddTarea from "./componets/AddTarea"
import { useState } from "react"


function App() {

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

       //eliminar una tarea
      const borrarTarea = (id) => {
        //console.log("borrar", id)
        setTareas(tareas.filter((tarea)=> tarea.id !== id))

      }

      //marcar o desmarcar tarea terminada
      const toggleTarea = (id) => {
        //console.log("terminada", id)
        setTareas(tareas.map((tarea) => tarea.id === id ? {...tarea, terminada: !tarea.terminada} : tarea))     
      }

  return (
    <div className="container">
      <Header />
      <AddTarea />
      {tareas.length >0 ?<Tareas tareas={tareas} onDelete={borrarTarea} onToggle={toggleTarea}/> : "No hay tareas para mostrar"}
    </div>
  )
}

export default App
