import React from "react";
import "./ToDoItem.css";
import { FaTrashAlt, FaCheck, FaStar } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

function ToDoItem({
  text,
  todos,
  setTodos,
  todo,
  todoClassName,
  prio,
  allTodos,
  setAllTodos,
}) {
  function handleRemove() {
    //search for current key in item and remove it from todos
    setTodos(todos.filter((el) => el.key !== todo.key));
    setAllTodos(allTodos.filter((el) => el.key !== todo.key));
  }

  function handleCheck() {
    //get current todo and change finished to true
    const updatedTodos = todos.map((el) => ({
      ...el,
      finished: el.key === todo.key ? !el.finished : el.finished,
    }));
    setTodos(updatedTodos);

    //set Timeout
    setTimeout(function () {
      setTodos(todos.filter((el) => el.key !== todo.key));
      setAllTodos(
        allTodos.map((el) => ({
          ...el,
          finished: el.key === todo.key ? !el.finished : el.finished,
        }))
      );
    }, 3000);
  }

  function starClickHandler( ) {
    
    const updatedPrioTodos = todos.map((el) => ({
      ...el,
      prio: el.key === todo.key ? !el.prio : el.prio,
    }));
    setTodos(updatedPrioTodos);

//set Timeout
    setTimeout(function () {
          setAllTodos(
            allTodos.map((el) => ({
              ...el,
              prio: el.key === todo.key ? !el.prio : el.prio,
            }))
          );
        });


      }

  function handlePrio() {
    if (prio) {
      return "star-active";
    }
    if (!prio) {
      return "star";
    } else return "star";
  }

  /* function starClickHandler() {
    setTodos(
      todos.map((el) => {
        if (el.key === todo.key) el.prio = !el.prio;
        return el;
      })
    ); */

  /* } */

  return (
    <div className="item-container">
      <div className={`todo-item-text-std ${todoClassName}`}>{text}</div>
      <div className="buttons">
        <span className={handlePrio()} onClick={starClickHandler}>
          <FaStar />
        </span>
        <button className="complete-btn" onClick={handleCheck}>
  {!todo.finished ? <FaCheck /> : <span id="close-button"><AiFillCloseCircle /></span>}
        </button>
        <button className="trash-btn" onClick={handleRemove}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
