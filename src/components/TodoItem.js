import React from "react";

function TodoItem(props) {
  const changeStatus = () => {
    console.log("Status Changing!");
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="todo-item">
      <input type="checkbox" onChange={changeStatus} />
      <p>{props.item.text}</p>
    </div>
  );
};

export default TodoItem;
