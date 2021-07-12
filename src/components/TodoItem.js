import React from "react";

function TodoItem(props) {
  const completedClass = props.item.completed ? "complete" : "incomplete";

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => { props.handleChange(props.item.id); }}
      />
      <p className={completedClass}>{props.item.text}</p>
    </div>
  );
};

export default TodoItem;
