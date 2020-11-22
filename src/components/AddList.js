import React, { useState } from "react";
import "./AddList.css";
import uniquid from "uniqid";
import AddListForm from "./AddListForm";

function AddList({ todoLists, setTodoLists }) {
  const [showListForm, setShowListForm] = useState(false);

  function handleClickAdd() {
    setShowListForm(true);
  }

  return (
    <>
      {!showListForm ? (
        <div className="add-list" onClick={handleClickAdd}>
          <span className="plus">+</span>
        </div>
      ) : (
        <AddListForm
          todoLists={todoLists}
          setTodoLists={setTodoLists}
          showListForm={showListForm}
          setShowListForm={setShowListForm}
        />
      )}
    </>
  );
}

export default AddList;
