import React, { useState } from "react";
import uniquid from "uniqid";
import { GoPlus } from "react-icons/go";

import "./AddToDoLine.css";

function AddToDoLine({ todos, setTodos, listColor, setAllTodos, allTodos }) {
  //state
  const [inputText, setInputText] = useState("");
  const [showForm, setShowForm] = useState(false);

  //handler
  const handleInputText = ({ keyCode, target }) => {
    setInputText(target.value); //just add if not empty or whitespace
    if (keyCode === 13) {
      const uniqid = require("uniqid");
      if (inputText.trim()) {
        const newTodoObject = {
          text: inputText,
          finished: false,
          key: uniquid(),
          time: Date.now(),
          listColor: listColor,
          prio: false,
        };

        setTodos([...todos, newTodoObject]);
        setAllTodos([...allTodos, newTodoObject]);
      }
      setInputText("");
    }
  };

  const handleClickAdd = () => {
    const uniqid = require("uniqid");
    if (inputText.trim()) {
      const newTodoObject = {
        text: inputText,
        finished: false,
        key: uniquid(),
        time: Date.now(),
        listColor: listColor,
        prio: false,
      };

      setTodos([...todos, newTodoObject]);
      // setAllTodos([...allTodos, newTodoObject]);
    }
    setInputText("");
  };

  const handleClickForm = () => {
    setShowForm(true);
  };

  return (
    <div className="add-todo-line">
      {showForm ? (
        <>
          <input
            className="NewToDoInput"
            autoFocus
            value={inputText}
            type="text"
            onChange={handleInputText}
            onKeyDown={handleInputText}
          ></input>
          <div className="add-todo-line-btns">
            <button className="add-todo-line-btns-1" onClick={handleClickAdd}>
              add
            </button>
            <button
              className="add-todo-line-btns-2"
              onClick={() => setShowForm(false)}
            >
              X
            </button>
          </div>
        </>
      ) : (
        ""
      )}
      {!showForm ? (
        <button className="btn-add-todo" onClick={handleClickForm}>
          <GoPlus className="btn-add-todo-plus-symbol" />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddToDoLine;
