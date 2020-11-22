import "./ToDoList.css";
import React, { useState } from "react";

//import components
import ToDoItem from "./ToDoItem";
import AddToDoLine from "./AddToDoLine";

function ToDoList({ backColor, headline, todoLists, setTodoLists, todoList }) {
  //states
  const [todos, setTodos] = useState([]);

  const addToDo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const getTodos = () => {
    const toDoItems = todos.map((item, index) => {
      return (
        <ToDoItem
          text={item.text}
          key={item.key}
          finished={item.finished}
          todos={todos}
          todo={item}
          setTodos={setTodos}
        />
      );
    });
    return toDoItems;
  };

  function handleRemove() {
    //search for current key in item and remove it from todos
    setTodoLists(todoLists.filter((el) => el.key !== todoList.key));
    console.log(todos);
  }

  return (
    <div className="todo-list-container" style={{ backgroundColor: backColor }}>
      <div className="close" onClick={handleRemove}>
        X
      </div>
      <h1>{headline}</h1>
      <ul className="todo-list">{getTodos()}</ul>
      <AddToDoLine
        className="add-todo-line"
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default ToDoList;
