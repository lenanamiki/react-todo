import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "../todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todocomponent = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);
    return (
      <div className="container todo-list">
        {todocomponent}
      </div>
    );
  }
}

export default App;
