// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onDelete, onToggleStatus }) => {
  return (
    <div style={styles.task}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <div>
        <button onClick={() => onToggleStatus(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)} style={{ marginLeft: '8px' }}>
          Delete
        </button>
      </div>
    </div>
  );
};

const styles = {
  task: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: '#f9f9f9',
  },
};

export default TaskItem;
