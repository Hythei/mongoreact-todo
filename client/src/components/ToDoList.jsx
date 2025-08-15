import React from 'react';
import TaskForm from './TaskForm.jsx';
import TaskItem from './TaskItem.jsx';
import Header from './Header.jsx';
import { useTasks } from '../hooks/useTasks.js';

function ToDoList(){
    const { tasks, addTask, deleteTask, loading, error } = useTasks();

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
                    />
                    ))}
            </ol>

        </div>
    );

}

export default ToDoList;