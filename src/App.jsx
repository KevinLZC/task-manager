import { TaskList } from '/src/components/TaskList/TaskList'
import './App.css'

let tasks = [
  {
    id: 1,
    title: 'Task 1',
    completed: false,
    deadline: '14/03/2024',
  },
  {
    id: 2,
    title: 'Task 2',
    completed: true,
    deadline: '20/03/2024',
  },
  {
    id: 3,
    title: 'Task 3',
    completed: false,
    deadline: '22/03/2024',
  },
]

function App() {
  return (
    <>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
