import React from 'react';

/**
 * Represents a task item component that displays task details and provides actions to delete the task or update its status.
 *
 * @param {Object} props - The properties passed to the TaskItem component.
 * @param {Object} props.task - The task object containing details such as its ID, title, and completion status.
 * @param {Function} props.onDelete - Callback function to handle the deletion of the task. It is called with the task's ID.
 * @param {Function} props.onUpdateStatus - Callback function to handle the status update of the task. It is called with the task's ID and the new status.
 * @return {JSX.Element} The rendered task item component.
 */
function TaskItem({ task, onDelete, onUpdateStatus }) {
    const handleStatusToggle = () => {
        onUpdateStatus(task._id, !task.completed);
    }
    return (
        <li>
            <span
                className={`text ${task.completed ? 'completed' : ''}`}
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
                {task.title}
            </span>
            <div className="action-buttons">
                <button className="delete-button" onClick={() => onDelete(task._id)}>
                    Delete
                </button>
                <button
                    className={`status-button ${task.completed ? 'completed' : 'pending'}`}
                    onClick={handleStatusToggle}
                >
                    {task.completed ? 'Done' : 'Pending'}
                </button>
            </div>

        </li>
    );
}

export default TaskItem;