import React, { useState } from "react";
import "./Panel.css";

//import components
import ToDoList from "./ToDoList";
import AddList from "./AddList";
import ShowBar from "./ShowBar";

function Panel({ allTodos, setAllTodos, doneItems, setDoneItems }) {
  const [todoLists, setTodoLists] = useState([]);

  return (
    <div className="panel">
      <div className="panel-todo-cards">
        {todoLists.map((item, index) => {
          return (
            <ToDoList
              backColor={item.color}
              headline={item.headline}
              todoLists={todoLists}
              setTodoLists={setTodoLists}
              key={item.key}
              todoList={item}
              allTodos={allTodos}
              setAllTodos={setAllTodos}
            />
          );
        })}
        <AddList todoLists={todoLists} setTodoLists={setTodoLists} />
      </div>
    </div>
  );
}

export default Panel;
