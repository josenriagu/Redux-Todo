import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Redux Todo</h1>
      <p>Touch or click on a todo to toggle completed</p>
      <TodoList />
    </div>
  );
}

export default App;
