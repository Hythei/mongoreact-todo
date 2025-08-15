// hooks/useTasks.js
import { useState, useEffect } from 'react';

const BASE_URL = '';

// export function useTasks() {
//     const [tasks, setTasks] = useState([]);
//
//     const addTask = (taskText) => {
//         if (taskText.trim() !== "") {
//             setTasks(prev => [...prev, taskText]);
//         }
//     };
//
//     const deleteTask = (index) => {
//         setTasks(prev => prev.filter((_, i) => i !== index));
//     };
//
//     const moveTaskUp = (index) => {
//         if (index > 0) {
//             setTasks(prev => {
//                 const updatedTasks = [...prev];
//                 [updatedTasks[index], updatedTasks[index - 1]] =
//                     [updatedTasks[index - 1], updatedTasks[index]];
//                 return updatedTasks;
//             });
//         }
//     };
//
//     const moveTaskDown = (index) => {
//         setTasks(prev => {
//             if (index < prev.length - 1) {
//                 const updatedTasks = [...prev];
//                 [updatedTasks[index], updatedTasks[index + 1]] =
//                     [updatedTasks[index + 1], updatedTasks[index]];
//                 return updatedTasks;
//             }
//             return prev;
//         });
//     };
//
//     return {
//         tasks,
//         addTask,
//         deleteTask,
//         moveTaskUp,
//         moveTaskDown
//     };
// }

export function useTasks(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        setLoading(true);
        setError(null);
        try{
            const res = await fetch(`${BASE_URL}/api/tasks`);
            if (!res.ok) throw new Error('Failed to fetch tasks');
            const data = await res.json();
            setTasks(data);
        } catch (err) {
            setError(err.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (taskText) => {
        const title =  String(taskText || '').trim();
        if (!title) return;
        try{
            const res = await fetch(`${BASE_URL}/api/tasks/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({title}),
            });
            if(!res.ok) throw new Error('failed to add task');
            const newTask = await res.json();
            setTasks((prev) => [newTask, ...prev]);
        } catch (err) {
            setError(err.message || 'unknown error');
        }
    };

    const deleteTask = async (taskId) => {
        try {
            const res = await fetch(`${BASE_URL}/api/tasks/${taskId}`, {method:"delete"});
            if (!res.ok) throw new Error("Failed to delete task");
            setTasks((prev) => prev.filter((t) => t._id !== taskId));
        } catch (err) {
            setError(err.message || 'unknown error');
        }
    };
    return {tasks, loading, error, fetchTasks, addTask, deleteTask}
}
export default useTasks;