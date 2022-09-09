import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { Routes, Route } from "react-router-dom";
import Update from './components/update/update';
import Navi from "./components/Navi/Navi"

function App() {
  return (
    <div>
      <Navi />

    <div className="main">

      <div>
        <h3>React Crud Operations</h3>
      </div>

      <Routes>
        <Route exact path='/' element={<Create/>} />
        <Route path='/read' element={<Read/>} />
        <Route path='/update' element={<Update/>} />
      </Routes>

    </div>
    </div>
  );
}

export default App;
