// hooks/useTasks.js
import { useState, useEffect } from 'react';

const BASE_URL = '';

export function useTasks(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * fetchTasks is an asynchronous function that retrieves task data from the server.
     * It updates the application state to indicate loading status, handles errors,
     * and updates the task state with the fetched data upon successful response.
     *
     * The function performs the following steps:
     * 1. Sets the loading state to `true` to indicate a loading process.
     * 2. Clears any existing error state.
     * 3. Sends a GET request to fetch tasks from the server API.
     * 4. Throws an error if the response is not successful.
     * 5. Parses the JSON response and updates the tasks state with the fetched data.
     * 6. Sets the error state with an appropriate error message in case of an error.
     * 7. Finally, resets the loading state to `false` regardless of success or failure.
     */
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

    /**
     * Adds a new task to the task list by sending a POST request to the server.
     *
     * This function takes a task description, validates it by trimming whitespace
     * and ensuring it is not empty, and then attempts to send it to the server.
     * If the server responds successfully, the new task is added to the list of tasks.
     * If an error occurs, an error message is recorded.
     *
     * @async
     * @function
     * @param {string} taskText - The description of the task to be added. Must be a non-empty string after trimming.
     * @throws {Error} Will throw an error if the server request fails or if no task description is provided.
     */
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

    /**
     * Deletes a task by its unique identifier.
     *
     * This asynchronous function makes a DELETE request to the API endpoint
     * to remove the specified task from the database. If the deletion is successful,
     * the local task state is updated to exclude the deleted task. If an error occurs
     * during the process, the error state is updated with the appropriate message.
     *
     * @param {string} taskId - The unique identifier of the task to be deleted.
     * @throws {Error} If the network request fails or the server responds with an error status.
     */
    const deleteTask = async (taskId) => {
        try {
            const res = await fetch(`${BASE_URL}/api/tasks/${taskId}`, {method:"delete"});
            if (!res.ok) throw new Error("Failed to delete task");
            setTasks((prev) => prev.filter((t) => t._id !== taskId));
        } catch (err) {
            setError(err.message || 'unknown error');
        }
    };

    /**
     * Updates the status of a task by sending a PATCH request to the server.
     *
     * @param {string} taskId - The unique identifier of the task to be updated.
     * @param {boolean} completed - The new completion status of the task.
     * @returns {Promise<void>} A promise that resolves when the task status is successfully updated or rejects if an error occurs.
     */
    const updateTaskStatus = async (taskId, completed) => {
        try{
            const res = await fetch(`${BASE_URL}/api/tasks/${taskId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({completed}),
            });
            if (!res.ok) throw new Error('Failed to update task status');
            const updatedTask = await res.json();
            setTasks((prev) => prev.map((task) =>
            task._id === taskId ? updatedTask : task));
        } catch (err) {
            setError(err.message || 'unknown error');
        }
    }

    return {tasks, loading, error, fetchTasks, addTask, deleteTask, updateTaskStatus}
}
export default useTasks;