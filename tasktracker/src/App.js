import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {useState} from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30PM',
        reminder: true,
    },
    {
        id: 2,
        text: 'Work Meeting',
        day: 'Feb 6th at 1:30PM',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 5th at 2:30PM',
        reminder: false,
    },
])

// Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id,...task}
  setTasks([...tasks, newTask])
}

// Delete Task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id!== id))

}

// Toggle Reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks Left!' }
    </div>
  );
}

export default App;
