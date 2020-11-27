import React from "react";

import "./Sidebar.css";

//items finished
//text color = listcolor

function Sidebar({ allTodos }) {
  function renderDoneItems() {
    const doneItems = allTodos.filter((el) => el.finished);
    const renderItems = doneItems.map((item) => {
      return (
        <li
          className="todo-finished-item"
          style={{
            color: item.listColor,
          }}
        >
          {item.text}
        </li>
      );
    });
    console.log(doneItems);
    return renderItems;
  }

  return (
    <div className="sidebar">
      <h1>Done</h1>
      <ul className="sidebar-list">{renderDoneItems()}</ul>
      <h1>Important Items</h1>
    </div>
  );
}

export default Sidebar;
