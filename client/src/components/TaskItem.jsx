import React from 'react';

function TaskItem({ task, onDelete }) {
    return (
        <li>
            <span className="text">{task.title}</span>
            <button className="delete-button" onClick={() => onDelete(task._id)}>
                delete
            </button>
        </li>
    );
}

export default TaskItem;