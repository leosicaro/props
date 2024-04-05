function Task({ id, text, completed, onToggle, deleteTask}){

    const handleCheck = () => {
        onToggle(id)
    }
  
    return (
    
        <li key={id} className="task">
            <p style={completed ? { textDecoration:'line-through'} :  {textDecoration:'none'} }> {text} </p>
            {completed ? <button onClick={() => deleteTask(id)} className="borrar">Borrar </button> : <button onClick={handleCheck} className="check"> Check </button>} 
        </li>
    )

}

export default Task;