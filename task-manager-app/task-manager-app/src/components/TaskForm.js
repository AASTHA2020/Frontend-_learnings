import React, { useEffect, useState } from 'react';

// TaskForm component for adding or editing tasks
const TaskForm = ({ addTask, editTaskData, updateTask }) => {
  const [taskTitle, setTaskTitle] = useState('');  // State to store the current task title in the input field

  // When `editTaskData` changes (a task is selected for editing), populate the form with the task's title
  useEffect(() => {
    if (editTaskData) {
      setTaskTitle(editTaskData.title);  // Set the input field to the title of the task being edited
    }
  }, [editTaskData]);

  // Function to handle form submission (either adding a new task or updating an existing one)
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission
    if (editTaskData) {
      updateTask(editTaskData.id, taskTitle);  // If editing, update the task with the new title
    } else {
      addTask(taskTitle);  // If adding a new task, call the addTask function
    }
    setTaskTitle('');  // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskTitle}  // Bind the input field to `taskTitle` state
        onChange={(e) => setTaskTitle(e.target.value)}  // Update `taskTitle` state as the user types
        placeholder="Enter task title"
        className="task-input"
      />
      <button type="submit" className="task-button">
        {editTaskData ? 'Update Task' : 'Add Task'}  
      </button>
    </form>
  );
};

export default TaskForm;
