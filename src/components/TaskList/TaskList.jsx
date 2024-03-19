import { Task } from '/src/components/Task/Task';
import './TaskList.css';

export function TaskList({ tasks, handleCompleted }) {
  let completedTasks = tasks.filter(task => task.completed).length
  let incompleteTasks = tasks.filter(task => !task.completed).length
  return (
    <>
      <div className='task-container'>
        <h2>Tareas completadas: {completedTasks}</h2>
        <h2>Tareas pendientes: {incompleteTasks}</h2>
        <hr />
        {tasks.map((task, index) => (
          <Task key={task.id} index={index} title={task.title} completed={task.completed} deadline={task.deadline} handleCompleted={handleCompleted} />
        ))}
      </div>
    </>
  );
}