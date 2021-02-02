import {useState} from 'react'

const Tasks = () => {
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

    return (
        <>
         {tasks.map((task) => (
             <h3 key={task.id}>{task.text}</h3>
         ))}   
        </>
    )
}

export default Tasks
