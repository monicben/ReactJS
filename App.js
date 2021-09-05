import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App=()=> {
  const [tasks, setTasks] = useState([
    {
       id: 1,
       text: "Lunch Meeting",
       day: "April 20th at 2:45pm",
       reminder: true,
    },
    {
        id: 2,
        text: "Internship Meeting",
        day: "April 21st at 3:00pm",
        reminder:true,
    },
    {
        id: 3,
        text: "Class Committee Meeting",
        day: "April 23rd at 10:00am",
        reminder:false,
    },
])

// Delete Task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !==id))
}

//Toggle Reminder
const toggleReminder = (id)=>{
  setTasks(tasks.map((task)=>task.id===
  id?{ ...task, reminder:!task.reminder} : task))
}

return (
    <div className="container">
      <Header/>
      {tasks.length>0 ?<Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} />:"No Tasks Left"}
    </div>
  );
}

export default App;
