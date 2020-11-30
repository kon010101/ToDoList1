import React from "react";

import "./Sidebar.css";

//items finished
//text color = 

function Sidebar({ allTodos, todoLists }) {

  function renderDoneItems() {
    //get all items which are done
    const doneItems = allTodos.filter((el) => el.finished);
    
    //sort them in order of timestemp
    doneItems.sort(function (a, b) {
      return b.time - a.time;
    });
    //render first 10 elements, remove older ones
    const renderItems = doneItems.map((item, index) => {
      if (index < 10) {
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
      } else if (index > 9) {
        //delete outdated items from array
        setAllTodos(allTodos.filter((el) => el !== item));
      }
    });
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
      <h1>Important</h1>
      <ul className="sidebar-list">Hello</ul>
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
