import { Route, Routes } from "react-router";
import "./App.css";
import Inbox from "./components/Inbox";
import Spam from "./components/Spam";
import Trash from "./components/Trash";
import EmailPage from "./components/EmailPage";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <nav>
        <NavLink to="/">Inbox</NavLink>
        <NavLink to="/spam">Spam</NavLink>
        <NavLink to="/trash">Trash</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Inbox />}></Route>
        <Route path="/spam" element={<Spam />}></Route>
        <Route path="/trash" element={<Trash />}></Route>
        <Route path="/inbox/:mailId" element={<EmailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
