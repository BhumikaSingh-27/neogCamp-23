import { Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
