import React from "react";
import "./ShowBar.css";
import trash from "../img/trash.png";

function ShowBar({ allTodos }) {
  function getRandomPosition() {
    return `${Math.floor(Math.random() * 70 + 10)}%`;
  }

  function getRandomOpacity() {
    return `${Math.random() + 0.1}`;
  }

  return (
    <div className="showbar">
      <h1>Done</h1>
      <img className="trash" src={trash} alt="" />
      {allTodos.map((item) => {
        if (item.finished) {
          return (
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
          );
        }
      })}
    </div>
  );
}

export default ShowBar;
