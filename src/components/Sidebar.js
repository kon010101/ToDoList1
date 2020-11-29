import React from "react";

import "./Sidebar.css";

//items finished
//text color = listcolor

function Sidebar({ allTodos }) {
  function renderDoneItems() {
    //get all items which are done
    const doneItems = allTodos.filter((el) => el.finished);
    //sort them in order of timestemp
    doneItems.sort(function (a, b) {
      return b.time - a.time;
    });
    console.log(`Done: ${doneItems}`);
    const renderItems = doneItems.map((item, index) => {
      if (index < 10) {
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
      }
    });
    console.log(doneItems);
    return renderItems;
  }

  return (
    <div className="sidebar">
      <h1>Important</h1>
      <ul className="sidebar-list">Hello</ul>
      <h1>Done</h1>
      <ul className="sidebar-list">{renderDoneItems()}</ul>
    </div>
  );
}

export default Sidebar;
