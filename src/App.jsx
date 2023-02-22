import Header from "./componets/Header"
import Tareas from "./componets/Tareas"
import AddTarea from "./componets/AddTarea"
import { useState } from "react"


function App() {

  const [mostrarForm, setMostrarForm] = useState(false)

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

      //agregar una tarea
      const addTarea = (tarea) => {
        //console.log(tarea)
        const id = Math.floor(Math.random() * 10000) + 1
        const nuevaTarea = { id, ...tarea }
        setTareas([...tareas, nuevaTarea])
      }

  return (
    <div className="container">
      <Header onAdd={()=> setMostrarForm(!mostrarForm)} mostrarForm={mostrarForm}/>
      {mostrarForm && <AddTarea onAdd={addTarea} />}
      {tareas.length >0 ?<Tareas tareas={tareas} onDelete={borrarTarea} onToggle={toggleTarea}/> : "No hay tareas para mostrar"}
    </div>
  )
}

export default App
