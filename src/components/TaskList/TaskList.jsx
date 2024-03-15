import { Task } from '/src/components/Task/Task';

export function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} title={task.title} completed={task.completed} deadline={task.deadline} />
      ))}
    </div>
  );
}