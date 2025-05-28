import React, { useState } from 'react';
import './TaskDashboard.css';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      title: input.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-dashboard" data-testid="dashboard">
      <h2>FocusFlow - Task Dashboard</h2>

      <div className="task-input-row">
        <input
          type="text"
          placeholder="Enter new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          data-testid="task-input"
        />
        <button onClick={addTask} data-testid="add-task-btn">
          Add
        </button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p data-testid="empty-state">No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`task ${task.completed ? 'completed' : ''}`}
              data-testid="task-item"
            >
              <span>{task.title}</span>
              <div>
                <button onClick={() => toggleStatus(task.id)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskDashboard;
