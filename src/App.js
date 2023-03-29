// import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

import { useEffect, useState } from 'react';

import Info from './components/Info/Info';
import Assignment from './components/Assignment/Assignment';
import Filter from './components/Filter/Filter';
import List from './components/List/List';

const data = [
  {
    task: 'Learn JS',
    done: false,
    id: 0,
  },
  {
    task: 'Learn CSS',
    done: false,
    id: 1,
  },
  {
    task: 'Learn React',
    done: false,
    id: 2,
  },
];

function App() {

  const [filter, setFilter] = useState('all');
  const [tasks, setTask] = useState(data);
  const [taskFilter, setTaskFilter] = useState(tasks);

  useEffect(() => {
    setTaskFilter(() => {
      switch (filter) {
          case 'current':
              return tasks.filter(item => !item.done)
          case 'done':
              return tasks.filter(item => item.done)
          case 'all':
              return tasks
      }})
  }, [filter, tasks])

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

        />

        <List
        taskFilter={taskFilter}

        tasks={tasks}
        setTask={setTask}
        />

        <Assignment
          tasks={tasks}
          setTask={setTask}
        />
      </main>
    </div>
  );
}

export default App;