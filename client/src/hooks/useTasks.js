// hooks/useTasks.js
import { useState } from 'react';

export function useTasks() {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        if (taskText.trim() !== "") {
            setTasks(prev => [...prev, taskText]);
        }
    };

    const deleteTask = (index) => {
        setTasks(prev => prev.filter((_, i) => i !== index));
    };

    const moveTaskUp = (index) => {
        if (index > 0) {
            setTasks(prev => {
                const updatedTasks = [...prev];
                [updatedTasks[index], updatedTasks[index - 1]] = 
                    [updatedTasks[index - 1], updatedTasks[index]];
                return updatedTasks;
            });
        }
    };

    const moveTaskDown = (index) => {
        setTasks(prev => {
            if (index < prev.length - 1) {
                const updatedTasks = [...prev];
                [updatedTasks[index], updatedTasks[index + 1]] = 
                    [updatedTasks[index + 1], updatedTasks[index]];
                return updatedTasks;
            }
            return prev;
        });
    };

    return {
        tasks,
        addTask,
        deleteTask,
        moveTaskUp,
        moveTaskDown
    };
}
export default useTasks;