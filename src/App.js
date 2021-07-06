import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "../todosData";

function App() {
  // eslint-disable-next-line react/jsx-filename-extension
  const todocomponent = todosData.map(item => <TodoItem key={item.id} item={item} />);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container todo-list">
      {todocomponent}
    </div>
  );
}

export default App;
