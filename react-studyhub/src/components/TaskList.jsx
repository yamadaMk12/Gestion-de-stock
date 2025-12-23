import { memo } from "react";
import TaskItem from "./TaskItem";

export default memo(function TaskList({ tasks, onToggle, onDelete }) {
  console.log("render task list");
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
});