import { useState } from "react"

const AddTarea = () => {

    const [texto, setTexto] = useState("")
    const [fecha, setFecha] = useState("")
    const [terminada, setTerminada] = useState(false)

  return (  
    <form className="add-form">
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
            type="text" 
            placeholder="Fecha"
            value={fecha} 
            onChange={(e)=>setFecha(e.target.value)}
        />
        </div>
        <div className="form-control form-control-check">
    <label>terminada</label>
    <input type="checkbox"/>
        </div>
        <input type="sumbit" value="Agregar tarea" className="btn btn-block"/>
    </form>
  )
}

export default AddTarea