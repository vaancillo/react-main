import Tarea from "./Tarea"

const Tareas = ({ tareas, onDelete, onToggle}) => {

  return ( 
    <>
       {tareas.map((tarea) => (
          <Tarea key={tarea.id} tarea={tarea} onDelete={onDelete} onToggle={onToggle}/>
       ))}
    </>
  )
}

export default Tareas