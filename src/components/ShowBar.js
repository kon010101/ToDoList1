import React from "react";
import "./ShowBar.css";

function ShowBar({ allTodos }) {
  function getRandomPosition() {
    return `${Math.floor(Math.random() * 70 + 10)}%`;
  }

  function getRandomOpacity() {
    return `${Math.random() + 0.1}`;
  }

  //layer 1 good spaceing?

  return (
    <div className="showbar">
      <h1>Done</h1>
      {allTodos.map((item) => (
        <span
          className="todo-all-item"
          style={{
            backgroundColor: item.listColor,
            left: getRandomPosition(),
            top: getRandomPosition(),
            opacity: getRandomOpacity(),
          }}
        >
          {item.text}
        </span>
      ))}
    </div>
  );
}

export default ShowBar;
