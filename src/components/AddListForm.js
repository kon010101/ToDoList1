import React, { useState } from "react";
import styles from "./AddListForm.css";

import Colors from "./Colors";
import { colorsDefault } from "./InitialData";

function AddListForm({ setTodoLists, todoLists, setShowListForm }) {
  const [colors, setColors] = useState(colorsDefault);
  const [headlineInput, setHeadlineInput] = useState("Standard List");

  const selectColor = (colorId) => {
    const newColors = colors.map((color) => {
      return {
        ...color,
        isSelected: color.id === colorId,
      };
    });

    setColors(newColors);
  };

  const getSelectedColor = () =>
    colors.find(({ isSelected }) => isSelected === true).id;

  function handleSubmit() {
    const uniqid = require("uniqid");

    setTodoLists([
      ...todoLists,
      { color: getSelectedColor(), headline: headlineInput, key: uniqid(), todos: [] },
    ]);
    setShowListForm(false);
  }

  function handleOnKey(e) {
      if (e.keyCode === 13) {
        const uniqid = require("uniqid");
        setTodoLists([
          ...todoLists,
          { color: getSelectedColor(), headline: headlineInput, key: uniqid(), todos: [] },
        ]);
        setShowListForm(false);
      }
  }

    function handleHeadlineInput(e) {
    setHeadlineInput(e.target.value);
  }

  function handleCancel() {
    setShowListForm(false);
  }

  return (
    <div
      className="form-container"
      style={{ backgroundColor: getSelectedColor() }}
    >
      <h1 className='list-form-h1'>Create Todo List</h1>
      <input
        autoFocus
        className="list-form-input"
        placeholder="name of list"
        onChange={handleHeadlineInput}
        onKeyDown={handleOnKey}
      ></input>
      <div className='color-items-box'>
      <Colors items={colors} action={selectColor} />
      </div>
      <div className='listform-buttons'>
      <button type="submit" onClick={handleSubmit}>
        Done
      </button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
    </div>
  );
}

export default AddListForm;
