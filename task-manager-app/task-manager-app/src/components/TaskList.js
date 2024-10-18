import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';  // Import icons for edit and delete buttons

// TaskList component to display the list of tasks
const TaskList = ({ tasks, deleteTask, toggleTask, editTask }) => {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.length === 0 && <p>No tasks available. Add some!</p>}  
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}  // Show the checkbox as checked if the task is completed
              onChange={() => toggleTask(task.id)}  // Call toggleTask to toggle the completion status
              className="task-checkbox"
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>  
              {task.title}
            </span>
            <button onClick={() => editTask(task.id)} className="edit-button">
              <FaEdit />  
            </button>
            <button onClick={() => deleteTask(task.id)} className="delete-button">
              <FaTrash />  
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
