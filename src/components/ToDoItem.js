import React from "react";

import "./ToDoItem.css";

function ToDoItem({ text, todos, setTodos, todo }) {
  function handleRemove() {
    //search for current key in item and remove it from todos
    setTodos(todos.filter((el) => el.key !== todo.key));
    console.log(todos);
  }

  return (
    <div className="item-container">
      <div className="todo-item">{text}</div>
      <div className="buttons">
        <button>Check</button>
        <button onClick={handleRemove}>----</button>
      </div>
    </div>
  );
}

export default ToDoItem;
