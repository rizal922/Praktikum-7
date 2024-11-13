import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodoDone, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodoDone={toggleTodoDone}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
