import React from 'react';

function TaskItem({ task, index, onDelete, onMoveUp, onMoveDown }) {
    return (
        <li>
            <span className="text">{task}</span>
            <button
                className="delete-button"
                onClick={() => onDelete(index)}
            >
                Delete
            </button>
            <button
                className="move-button"
                onClick={() => onMoveUp(index)}
            >
                Up
            </button>
            <button
                className="move-button"
                onClick={() => onMoveDown(index)}
            >
                Down
            </button>
        </li>
    );
}

export default TaskItem;