import React from 'react';


function Tasks({tasks, onToggleCompletion, onDeleteTask}){
    return(
        <ol className="tasks_list">
            {tasks.map(task => (
                <li key={task.id} className={task.completed ? 'completed' : ''}>
                    <div className="task-content">
                        <span
                            className={`task-text ${task.completed ? 'completed-text' : ''}`}
                            onClick={() => onToggleCompletion(task.id)}
                            style={{cursor: 'pointer'}}
                        >
                            {task.text}
                        </span>
                        <div className="task-actions">
                            <button
                                onClick={() => onToggleCompletion(task.id)}
                                className={`toggle-btn ${task.completed ? 'mark-undone' : 'mark-done'}`}
                            >
                                {task.completed ? 'Undo' : 'Done'}
                            </button>
                            <button
                                onClick={() => onDeleteTask(task.id)}
                                className="delete-btn"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </li>
            ))}
        </ol>
    );
}

export default Tasks;