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
  const [isCompleted, setIsCompleted] = useState(tasks)

  function handleCompleted(id) {
    setIsCompleted(prevTasks =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
    )
  }

  return (
    <>
      <h1>Task List</h1>
      <TaskList tasks={isCompleted} handleCompleted={handleCompleted} />
    </>
  )
}

export default App
