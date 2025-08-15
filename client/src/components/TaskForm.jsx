import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [newTask, setNewTask] = useState("");

    function handleSubmit(e) {
        e?.preventDefault?.();
        const t = newTask.trim();
        if (!t) return;
        onAddTask(t);
        setNewTask('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task"
                className="new-task-input"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="add-button" type="submit">
                Add
            </button>
        </form>
    );
}

export default TaskForm;