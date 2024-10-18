import React, { useEffect, useState } from 'react';  
import TaskList from './components/TaskList';  // Import TaskList component
import TaskForm from './components/TaskForm';  // Import TaskForm component
import TaskFilter from './components/TaskFilter';  // Import TaskFilter component
import Header from './components/Header';  // Import Header component
import Quote from './components/Quote';  // Import Quote component
import './App.css';  // Import the CSS for styling

const App = () => {
  const [tasks, setTasks] = useState([]);  // State to store the list of tasks
  const [editTaskData, setEditTaskData] = useState(null);  // State to store the task being edited
  const [filter, setFilter] = useState('all');  // State to store the current filter ('all', 'completed', 'pending')

  // Load tasks from local storage when the component first mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];  // Get tasks from local storage or initialize with an empty array
    setTasks(storedTasks);  // Set the tasks in state
  }, []);
  
  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Store updated tasks in local storage
  }, [tasks]);  // Dependency array ensures this runs only when `tasks` changes

  // Function to add a new task
  const addTask = (title) => {
    const newTask = {
      id: Date.now(),  // Unique ID for the task (using current timestamp)
      title,
      completed: false,  // Default the task to incomplete
    };
    setTasks([...tasks, newTask]);  // Add the new task to the existing tasks array
  };

  // Function to delete a task by ID
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);  // Remove the task with the matching ID
    setTasks(updatedTasks);  // Update the state with the remaining tasks
  };

  // Function to toggle the completion status of a task
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task  // Toggle the 'completed' status for the matching task
      )
    );
  };

  // Function to start editing a task (populate the form with task data)
  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);  // Find the task by ID
    setEditTaskData(taskToEdit);  // Set the task to the `editTaskData` state
  };

  // Function to update an existing task after editing
  const updateTask = (id, updatedTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: updatedTitle } : task  // Update the title of the task with the matching ID
    );
    setTasks(updatedTasks);  // Update the tasks state with the new task data
    setEditTaskData(null);  // Clear the `editTaskData` state after updating
  };

  // Function to filter tasks based on the current filter (all, completed, or pending)
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;  // Return only completed tasks if filter is 'completed'
    } else if (filter === 'pending') {
      return !task.completed;  // Return only pending (incomplete) tasks if filter is 'pending'
    }
    return true;  // Return all tasks if no specific filter is applied
  });

  return (
    <div className="app">
      <Header /> 
      <Quote />   
      <TaskForm addTask={addTask} editTaskData={editTaskData} updateTask={updateTask} />  
      <TaskFilter filter={filter} setFilter={setFilter} />  
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} />  
    </div>
  );
};

export default App;
