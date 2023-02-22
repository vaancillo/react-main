import Button from "./Button"

const Header = ({ onAdd, mostrarForm }) => {

/*const agregar = () => {
    console.log("agregar")
}
  
  const borrar = () => {
    console.log("borrar")
  }*/
  
  return (
    <header  className="header">
      <h1>Tareas</h1>
      <Button texto={mostrarForm ? "Cerrar": "Agregar"} color={mostrarForm ? "red" : "green"} onClick={onAdd} /> 
    </header>
  )
}

export default Header