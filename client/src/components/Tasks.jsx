import React from 'react';


function Tasks({tasks}){
    return(
        <ol className="tasks_list">
            {tasks.map(task => (
                <li key={task.id}>{task.text}</li>
            ))}
        </ol>
    );
}

export default Tasks;