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
      { color: getSelectedColor(), headline: headlineInput, key: uniqid() },
    ]);
    setShowListForm(false);
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
      <h1>Create Todo List</h1>
      <label>Title</label>
      <input
        autoFocus
        className="headline"
        placeholder="name of list"
        onChange={handleHeadlineInput}
      ></input>
      <h2>Color</h2>
      <Colors items={colors} action={selectColor} />
      <button type="submit" onClick={handleSubmit}>
        Done
      </button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default AddListForm;
