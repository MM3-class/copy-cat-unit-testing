import "./App.css";
import { Routes, Route } from "react-router-dom";
import CopyCatContainer from "./components/copy-cat-container/CopyCatContainer";
import Login from "./components/login/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/copyCatContainer" element={<CopyCatContainer />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
