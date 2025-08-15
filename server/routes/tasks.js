const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Creating a new task
router.post('/', async (req, res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

// Getting all the tasks from MongoDB
router.get('/', async (req, res) => {
    try{
        const tasks = await Task.find().sort({createdAt: -1});
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// Deleting a task
router.delete('/:id', async (req, res) => {
    try{
        const { id } =  req.params;
        const deleted = await Task.findByIdAndDelete(id);
        if (!deleted) return res.status(404). json({ msg: 'Task not found'});
        res.json ({msg: "deleted", id});
    } catch (err) {
        res.status(500).json({msg:err.message});
    }
});

//Updating a task - basically seeing switching it to completed
router.patch('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const updated = await Task.findByIdAndUpdate(id, req.body, {new: true});
        if (!updated) return res.status(404).json({msg: 'task not found'});
        res.json(updated);
    } catch (err) {
        res.status(400).json({msg: err.message});
    }
});


module.exports = router;