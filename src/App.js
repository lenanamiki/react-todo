import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "../todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  render() {
    // eslint-disable-next-line react/jsx-filename-extension
    const todocomponent = this.state.todos.map(item => <TodoItem key={item.id} item={item} />);
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="container todo-list">
        {todocomponent}
      </div>
    );
  }
}

export default App;
