import { Task } from '/src/components/Task/Task';
import './TaskList.css';

export function TaskList({ tasks, handleCompleted }) {
  let completedTasks = tasks.filter(task => task.completed).length
  return (
    <>
      <div className='task-container'>
        <h2>Tareas completadas: {completedTasks}</h2>
        <hr />
        {tasks.map(task => (
          <Task key={task.id} id={task.id} title={task.title} completed={task.completed} deadline={task.deadline} handleCompleted={handleCompleted} />
        ))}
      </div>
    </>
  );
}