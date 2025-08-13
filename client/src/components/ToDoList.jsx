import React from 'react';
import TaskForm from './TaskForm.jsx';
import TaskItem from './TaskItem.jsx';
import Header from './Header.jsx';
import { useTasks } from '../hooks/useTasks.js';

function ToDoList(){
    const { tasks, addTask, deleteTask, moveTaskUp, moveTaskDown } = useTasks();

    return(
        <div className="to-do-list">
            <Header />
            <TaskForm onAddTask={addTask} />
            <ol>
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        task={task}
                        index={index}
                        onDelete={deleteTask}
                        onMoveUp={moveTaskUp}
                        onMoveDown={moveTaskDown}
                    />
                    ))}
            </ol>

        </div>
    );

}

export default ToDoList;