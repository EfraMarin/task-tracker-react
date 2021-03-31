import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAdd, setShowAdd] = useState(false)
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

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    console.log(task);
  }
  //delete task
  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id))
  // toggle reminder
  const toggleReminder = (id) => { setTasks(tasks.map((t) => t.id === id ? { ...t, reminder: !t.reminder } : t)) }

  return (
    <div className="app">
      <div className="flex justify-center">
        <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/3 text-gray-200">

          <Header title='Task Tracker' onAdd={() => setShowAdd(!showAdd)} isFormActive={showAdd === true} />

          <div className="my-2"></div>
          {showAdd && <AddTask onAdd={addTask} />}
          <div className="my-8"></div>

          <hr className="border solid border-third my-8" />
          {tasks.length > 0 ?
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            : 'No Tasks'}
        </div>
      </div>
    </div>
  );
}

export default App;