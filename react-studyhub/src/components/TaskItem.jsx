import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>DELETE</button>
    </li>
  );
}

export default React.memo(TaskItem);
