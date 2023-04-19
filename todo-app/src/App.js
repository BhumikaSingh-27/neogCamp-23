import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import { Summary } from "./components/Summary";
import { DoneTodoList } from "./components/DoneTodoList";
import { OpenTodoList } from "./components/OpenTodoList";
import { TodoDesc } from "./components/TodoDesc";

const getStyle = ({ isActive }) => ({
  margin: "10px",
  paddingTop: "2rem",
  color: isActive ? "red" : "",
  textDecoration: "none",
  display: "inline",
});

function App() {
  return (
    <div className="App">
      <h1>Todo App📝</h1>
      <nav>
        <NavLink to="/" style={getStyle}>
          Summary Page{" "}
        </NavLink>{" "}
        |
        <NavLink to="/donetodo" style={getStyle}>
          Done Todo{" "}
        </NavLink>{" "}
        |
        <NavLink to="/opentodo" style={getStyle}>
          {" "}
          Open Todo{" "}
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Summary />}></Route>
        <Route path="/donetodo" element={<DoneTodoList />}></Route>
        <Route path="/opentodo" element={<OpenTodoList />}></Route>
        <Route path="/todoDesc/:todoId" element={<TodoDesc />}></Route>
      </Routes>
    </div>
  );
}

export default App;
