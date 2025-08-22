import React from 'react';
import TaskForm from './TaskForm.jsx';
import TaskItem from './TaskItem.jsx';
import Header from './Header.jsx';
import { useTasks } from '../hooks/useTasks.js';


/**
 * Renders the ToDoList component which manages and displays a list of tasks.
 * It includes a header, a form to add tasks, a loading indicator, an error message,
 * and a list of tasks with delete functionality.
 *
 * @return {JSX.Element} The rendered JSX content of the ToDoList component.
 */
function ToDoList(){
    const { tasks, addTask, deleteTask, updateTaskStatus, loading, error } = useTasks();

    return(
        <div className="to-do-list">
            <Header />
            <TaskForm onAddTask={addTask} />

            {loading && <p>Loading...</p>}
            {error && <p style={{color:'red'}}>{error}</p>}
            <ol>
                {tasks.map((task) => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        onDelete={deleteTask}
                        onUpdateStatus={updateTaskStatus}
                    />
                    ))}
            </ol>

        </div>
    );

}

export default ToDoList;