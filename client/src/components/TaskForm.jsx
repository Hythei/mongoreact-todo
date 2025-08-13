import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleSubmit() {
        onAddTask(newTask);
        setNewTask("");
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}
            />
            <button
                className="add-button"
                onClick={handleSubmit}
            >
                Add
            </button>
        </div>
    );
}

export default TaskForm;