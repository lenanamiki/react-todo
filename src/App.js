import React from "react";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
