import React from "react";

import "./Sidebar.css";

//items finished
//text color = 

function Sidebar({ allTodos, todoLists }) {
  function renderDoneItems() {
    const doneItems = allTodos.filter((el) => el.finished);
    const renderItems = doneItems.map((item) => {
      return (
        <li
          className="todo-finished-item"
          style={{
            backgroundColor: item.listColor,
          }}
        >
          {item.text}
        </li>
      );
    });
    console.log(doneItems);
    return renderItems;
  }

  function renderPrioItems(){
    const prioItems = allTodos.filter((el) => el.prio);
    const renderPrio = prioItems.map((item) => {
      return (
        <li
          className="todo-finished-item"
          style={{
            backgroundColor: item.listColor,
          }}
        >
          {item.text}
        </li>
      );
    });
    return renderPrio;
  }

  function renderListCategories (){

    const projectName = todoLists.map((item) => {
      return (
        <li
          className="todo-finished-item"
          style={{
            backgroundColor: item.color,  
          }}
        >
          {item.headline}
        </li>
      );
    });
   return projectName;
  }

  return (
    <div className="sidebar">
      <h1>Done</h1>
      <ul className="sidebar-list">{renderDoneItems()}</ul>
      <h1>Important</h1>
      <ul className="sidebar-list">{renderPrioItems()}</ul>
      <h1>Projects</h1>
      <ul className="sidebar-list">{renderListCategories()}</ul>
    </div>
  );
}

export default Sidebar;
