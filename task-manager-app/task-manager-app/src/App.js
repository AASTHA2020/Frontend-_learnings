import React, { useEffect, useState } from 'react';  
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import Header from './components/Header';
import Quote from './components/Quote';
import './App.css';

const App =() => {
  const [tasks, setTasks] = useState([]);
  const[edittaskData, setEditTaskData] = useState(null);
  const [filter, setFilter] = useState('all');


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  
  
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };


  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditTaskData(taskToEdit);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
    setEditTaskData(null);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    }
    return true;
  });


  return (
    <div className = "app">
      <Header />
      <Quote />
     <TaskForm addTask={addTask} edittaskData={edittaskData} updateTask={updateTask} />

      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} />

    </div>
  );

};

export default App;