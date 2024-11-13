import React from 'react';

const TodoItem = ({ todo, toggleTodoDone, deleteTodo }) => {
  return (
    <div className="todo-item d-flex justify-content-between align-items-center py-2 border-bottom">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodoDone(todo.id)}
        />
        <label className={`form-check-label ${todo.done ? 'text-muted' : ''}`}>
          {todo.task}
        </label>
      </div>
      <div>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
