import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Done from "./Done";
import Open from "./Open";
import TodoDetails from "./TodoDetails";
import Summary from "./Summary";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/done">Done</NavLink> ||
        <NavLink to="/open">Open</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Summary />}></Route>
        <Route path="/done" element={<Done />}></Route>
        <Route path="/open" element={<Open />}></Route>
        <Route path="/todo/:todoId" element={<TodoDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
