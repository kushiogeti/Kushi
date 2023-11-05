import React, { useState } from 'react';
import Task from './Task';

function TodoList({ currentProject, tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [currentProject]: [...prevTasks[currentProject], newTask],
      }));
      setNewTask(''); // Clear the input field
    }
  };

  const deleteTask = (taskToDelete) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [currentProject]: prevTasks[currentProject].filter(task => task !== taskToDelete),
    }));
  };

  return (
    <div className="todo-list">
      <h2>{currentProject}</h2>
      {tasks[currentProject].map((task, index) => (
        <Task key={index} task={task} onDelete={deleteTask} />
      ))}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TodoList;
