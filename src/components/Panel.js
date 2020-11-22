import React, { useState } from "react";
import "./Panel.css";

//import components
import ToDoList from "./ToDoList";
import AddList from "./AddList";
import ShowBar from "./ShowBar";

function Panel() {
  const [todoLists, setTodoLists] = useState([]);

  return (
    <>
      <div className="panel">
        {todoLists.map((item, index) => {
          return (
            <ToDoList
              backColor={item.color}
              headline={item.headline}
              todoLists={todoLists}
              setTodoLists={setTodoLists}
              key={item.key}
              todoList={item}
            />
          );
        })}
        <AddList todoLists={todoLists} setTodoLists={setTodoLists} />
      </div>
      <ShowBar />
    </>
  );
}

export default Panel;
