import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTodo(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
