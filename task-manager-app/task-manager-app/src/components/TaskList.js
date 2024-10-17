// src/components/TaskList.js
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Icons import kiye

const TaskList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.length === 0 && <p>No tasks available. Add some!</p>} {/* Agar koi task nahi hai to message dikhayenge */}
        {tasks.map((task) => (
          <li key={task.id}>
            {/* Checkbox jo task ko complete/incomplete mark karega */}
            <input
              type="checkbox"
              checked={task.completed} // Task ka completed status show karta hai
              onChange={() => toggleComplete(task.id)} // ToggleComplete function call hota hai jab checkbox change hota hai
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title} {/* Task ka naam dikhata hai */}
            </span>
            <button onClick={() => editTask(task.id)}><FaEdit /></button> {/* Edit button */}
            <button onClick={() => deleteTask(task.id)}><FaTrash /></button> {/* Delete button */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
