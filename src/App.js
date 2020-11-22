import './App.css';

//import components
import Header from './components/Header'
import Panel from './components/Panel'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Header />
        <div className="main-container">
          <Panel />
        </div>
    </div>
  );
}

export default App;
