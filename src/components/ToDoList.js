import "./ToDoList.css";
import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

//import components
import ToDoItem from "./ToDoItem";
import AddToDoLine from "./AddToDoLine";

function ToDoList({
  backColor,
  headline,
  todoLists,
  setTodoLists,
  todoList,
  allTodos,
  setAllTodos,
}) {
  //states
  const [changeHeadline, setChangeHeadline] = useState(false);
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    //sort todos nad put Important ones on top
    todos.sort(function (a, b) {
      return b.prio - a.prio;
    });
    const toDoItems = todos.map((item, index) => {
      return (
        <ToDoItem
          todoClassName={item.finished ? "todo-item-finished" : "todo-item"}
          text={item.text}
          key={item.key}
          finished={item.finished}
          todos={todos}
          todo={item}
          setTodos={setTodos}
          listColor={backColor}
          prio={item.prio}
          allTodos={allTodos}
          setAllTodos={setAllTodos}
        />
      );
    });
    return toDoItems;
  };

  function handleRemove() {
    //search for current key in item and remove it from todos
    setTodoLists(todoLists.filter((el) => el.key !== todoList.key));
  }

  function handleDoubleClick() {
    setChangeHeadline(true);
    setInputText(todoList.headline);
    // console.log(todoLists);

    // todoList.headline = "a new headlone";
    // setTodoLists([...todoLists]);
    // console.log(todoLists);
    // setChangeHeadline(false);
  }

  const handleInputText = ({ keyCode, target }) => {
    setInputText(target.value); //just add if not empty or whitespace
    if (keyCode === 13) {
      if (inputText.trim()) todoList.headline = inputText;
      setChangeHeadline(false);
    }
  };

  return (
    <div className="todo-list-container" style={{ backgroundColor: backColor }}>
      <div className="close" onClick={handleRemove}>
        <RiCloseLine />
      </div>
      {!changeHeadline ? (
        <h1 className="headline" onDoubleClick={handleDoubleClick}>
          {todoList.headline}
        </h1>
      ) : (
        <input
          className="input-headline"
          autoFocus
          value={inputText}
          onKeyDown={handleInputText}
          onChange={handleInputText}
        ></input>
      )}
      <ul className="todo-list">{getTodos()}</ul>
      <AddToDoLine
        className="add-todo-line"
        todos={todos}
        setTodos={setTodos}
        listColor={backColor}
        allTodos={allTodos}
        setAllTodos={setAllTodos}
      />
    </div>
  );
}

export default ToDoList;
