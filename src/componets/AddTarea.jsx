import { useState } from "react"

const AddTarea = ({onAdd}) => {

    const [texto, setTexto] = useState("")
    const [fecha, setFecha] = useState("")
    const [terminada, setTerminada] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!texto){
            alert("Por favor teclea una descripción para esta tarea")
            return
        }
        if (!fecha){
            alert("Por favor teclea una fecha para esta tarea")
            return
        }
        
        onAdd({texto, fecha, terminada})

        setTexto("")
        setFecha("")
        setTerminada(false)


    }
    

  return (  
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
        <label>Tarea:</label>
        <input 
            type="text" placeholder="Descripción" 
            value={texto} 
            onChange={(e)=>setTexto(e.target.value)}
        />
        </div>
        <div className="form-control">
    <label>Fecha:</label>
    <input 
            type="date" 
            placeholder="Fecha"
            value={fecha} 
            onChange={(e)=>setFecha(e.target.value)}
        />
        </div>
        <div className="form-control form-control-check">
    <label>terminada</label>
    <input 
        type="checkbox"
            checked={terminada}
            value={terminada}
            onChange={(e) => setTerminada(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Agregar tarea" className="btn btn-block"/>
    </form>
  )
}

export default AddTarea