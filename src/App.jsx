import { TaskList } from '/src/components/TaskList/TaskList'
import { useState } from 'react'
import './App.css'

let tasks = [
  {
    id: 1,
    title: 'Task 1',
    deadline: '15/03/2024',
    completed: false,
  },
  {
    id: 2,
    title: 'Task 2',
    deadline: '17/03/2024',
    completed: true,
  },
  {
    id: 3,
    title: 'Task 3',
    deadline: '22/03/2024',
    completed: false,
  },
]

function App() {
  const [task, setTask] = useState(tasks)

  const handleCompleted = (index) => {
    const newTasks = [...task]
    newTasks[index].completed = !newTasks[index].completed
    setTask(newTasks)
  }

  return (
    <>
      <h1>Task List</h1>
      <TaskList tasks={task} handleCompleted={handleCompleted} />
    </>
  )
}

export default App
