import { useState, useRef } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd(title);
    setTitle("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button>Ajouter</button>
    </form>
  );
}