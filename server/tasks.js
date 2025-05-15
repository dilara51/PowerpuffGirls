const express = require('express');
const router = express.Router();


let tasks = [];
let idCounter = 1;

// GET 
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST 
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = {
    id: idCounter++,
    title,
    description: description || '',
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
