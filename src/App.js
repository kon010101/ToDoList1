import "./App.css";

//import components
import Header from "./components/Header";
import Panel from "./components/Panel";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <div className="main-container-sp">
          <Sidebar />
          <Panel />
        </div>
      </div>
    </div>
  );
}

export default App;
