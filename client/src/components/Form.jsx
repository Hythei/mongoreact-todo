// This thing will focus on creating a new task
import React, {useState} from 'react';

function Form({onAddTask}){
    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(task.trim()){
            onAddTask(task);
            setTask("");
        }
    };
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="task">
                <input
                    type="text"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    placeholder="Add a new task"
                />
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default Form;