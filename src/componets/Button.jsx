const Button = ({ texto, color, onClick }) => {

  return (
    <button onClick={onClick} style= {{ backgroundColor: color}}className="btn">{texto}</button>
    
  )
}

export default Button