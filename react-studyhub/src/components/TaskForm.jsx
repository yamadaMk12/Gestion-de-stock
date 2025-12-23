import { memo, useRef } from "react";

export default memo(function TaskForm({ onAdd }) {
  console.log("render task form");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) return;

    onAdd(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        placeholder="Nouvelle tâche"
      />
      <button>Ajouter</button>
    </form>
  );
});