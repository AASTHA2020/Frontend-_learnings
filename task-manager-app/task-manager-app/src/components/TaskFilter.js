import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="task-filter">
      {/* Har button ek filter ko set karega */}
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
};

export default TaskFilter;
