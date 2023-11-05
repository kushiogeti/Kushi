import React, { useState } from 'react';
import TodoList from './TodoList';
import SectionSwitcher from './SectionSwitcher';

function App() {
  const [currentProject, setCurrentProject] = useState('Academic and Research');

  // State to manage tasks
  const [tasks, setTasks] = useState({
    'Academic and Research': [],
    'Work': [],
  });

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <SectionSwitcher setCurrentProject={setCurrentProject} />
      <TodoList currentProject={currentProject} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;