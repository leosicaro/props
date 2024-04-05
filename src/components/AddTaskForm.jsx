import {useState} from 'react';


function AddTaskForm({AddTask}){

    const [newtask, setNewtask] = useState('');

    const handleChange = (e) => {
        setNewtask(e.target.value)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if( !newtask.trim() ) return;
    
        AddTask(newtask)
        setNewtask('');
    }


    return (  
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Task" value={newtask} onChange={handleChange}  />
            <button type="submit" >Submitr</button>
        </form>
    )
}

export default AddTaskForm;