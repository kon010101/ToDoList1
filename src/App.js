import "./App.css";
import React, { useState } from "react";

//import components
import Header from "./components/Header";
import Panel from "./components/Panel";
import Sidebar from "./components/Sidebar";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <div className="main-container-sp">
          <Sidebar allTodos={allTodos} />
          <Panel allTodos={allTodos} setAllTodos={setAllTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
