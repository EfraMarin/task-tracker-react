import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Task 1',
      date: 'abril 1, 2021',
      reminder: true,
    },
    {
      id: 2,
      text: 'Task 2',
      date: 'abril 2, 2021',
      reminder: false,
    },
    {
      id: 3,
      text: 'Task 3',
      date: 'abril 3, 2021',
      reminder: true,
    },
    {
      id: 4,
      text: 'Task 4',
      date: 'abril 4, 2021',
      reminder: true,
    },
  ])
  //delete task
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id))
  // toggle reminder
  const toggleReminder = (id) => { setTasks(tasks.map((t) => t.id === id ? { ...t, reminder: !t.reminder } : t)) }

  return (
    <div className="app">
      <div className="flex justify-center">
        <div className="w-2/3 text-gray-200">

          <Header title='Task Tracker' />

          <div className="my-2"></div>

          {tasks.length > 0 ?
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            : 'No Tasks'}
        </div>
      </div>
    </div>
  );
}

export default App;