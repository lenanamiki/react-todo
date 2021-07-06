import React from "react";

const TodoItem = (props) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="todo-item">
      <input type="checkbox" />
      <p>{props.item.text}</p>
    </div>
  );
};

export default TodoItem;
