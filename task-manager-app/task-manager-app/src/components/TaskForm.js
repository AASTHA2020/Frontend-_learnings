import React, { useEffect, useState } from 'react';

const TaskForm = ( { addTask, editTaskData, updatetask})=> {
    const [taskTitle, setTaskTitle] = useState('');

    useEffect(() => {
        if (editTaskData) {
            setTaskTitle(editTaskData.title);
        }
    }, [editTaskData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editTaskData) {
            updatetask(editTaskData.id, taskTitle);
        } else {
            addTask(taskTitle);
        }
        setTaskTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task title"
            />
            <button type="submit">{editTaskData ? 'Update Task' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;