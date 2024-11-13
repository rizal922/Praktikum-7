import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { generateId } from './utils';

const App = () => {
  const [todos, setTodos] = useState([
    { id: generateId(), task: 'Go to gym', done: false },
    { id: generateId(), task: 'Finish report', done: false },
    { id: generateId(), task: 'Call mom', done: true },
  ]);

  const addTodo = (newTask) => {
    setTodos([...todos, { id: generateId(), task: newTask, done: false }]);
  };

  const toggleTodoDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodoDone={toggleTodoDone} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;