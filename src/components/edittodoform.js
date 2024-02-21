import { useState } from "react";

export const EditTodoForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTask(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm" key-id={task.id}>
      <input
        type="text"
        className="TodoInput"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be updated?"
      />
      <button type="submit" className="TodoSubmit">
        Add Task
      </button>
    </form>
  );
};
