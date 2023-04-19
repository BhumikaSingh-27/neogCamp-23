import { Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import { Home } from "./components/Home";
import { Questions } from "./components/Questions";
import { Answers } from "./components/Answers";

function App() {
  return (
    <div className="App">
      <h1>Welcome Bhumika!</h1>
      <NavLink to="/questions"> Show Question List</NavLink>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/answers/:quesNo" element={<Answers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
