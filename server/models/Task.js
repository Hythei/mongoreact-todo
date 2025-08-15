const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a task'],
            trim: true,
            maxLength: [100, 'Task cannot exceed 100 characters'],
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;