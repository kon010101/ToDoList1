import React from "react";
import "./ToDoItem.css";
import { FaTrashAlt, FaCheck, FaStar } from "react-icons/fa";

function ToDoItem({ text, todos, setTodos, todo, todoClassName, prio }) {
  function handleRemove() {
    //search for current key in item and remove it from todos
    setTodos(todos.filter((el) => el.key !== todo.key));
    console.log(todos);
  }

  function handleCheck() {
    //get current todo and change finished to true
    setTodos(
      todos.map((el) => {
        if (el.key === todo.key) el.finished = !el.finished;
        return el;
      })
    );
  }

  function handlePrio() {
    if (prio) {
      return "star-active";
    }
    if (!prio) {
      return "star";
    } else return "star";
  }

  function starClickHandler() {
    setTodos(
      todos.map((el) => {
        if (el.key === todo.key) el.prio = !el.prio;
        return el;
      })
    );
  }

  return (
    <div className="item-container">
      <div className={`todo-item-text-std ${todoClassName}`}>{text}</div>
      <div className="buttons">
        <span className={handlePrio()} onClick={starClickHandler}>
          <FaStar />
        </span>
        <button className="complete-btn" onClick={handleCheck}>
          {!todo.finished ? <FaCheck /> : <span>DONE</span>}
        </button>
        <button className="trash-btn" onClick={handleRemove}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
