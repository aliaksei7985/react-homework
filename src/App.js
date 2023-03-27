// import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import { useState } from 'react';

import Info from './components/Info/Info';
import Assignment from './components/Assignment/Assignment';
import Filter from './components/Filter/Filter';
import List from './components/List/List';

function App() {
  const data = [
    {
      task: 'Learn JS',
      done: false,
      id: 1,
    },
    {
      task: 'Learn CSS',
      done: false,
      id: 2,
    },
    {
      task: 'Learn React',
      done: false,
      id: 3,
    },
  ];
  const [filter, setFilter] = useState('all');
  const [tasks, setTask] = useState(data);
  const [taskFilter, setTaskFilter] = useState(tasks);

  return (
    <div className='wrapper'>
      <header>
        <Info
          tasks={tasks}
        />
      </header>
      <main>
        <Filter
          filter={filter}
          setFilter={setFilter}
          tasks={tasks}
          setTaskFilter={setTaskFilter}
        />

        <List
        taskFilter={taskFilter}
        tasks={tasks}
        setTask={setTask}
        />
        <Assignment />
      </main>
    </div>
  );
}

export default App;