import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";

import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { Wishlist } from "./components/Wishlist";
import { NotFound } from "./components/NotFound";
import { About1 } from "./components/About1";

function App() {
  return (
    <div className="App">
      
      <nav>
        <NavLink to="/">Home </NavLink> ||
        <NavLink to="/cart">Cart </NavLink> ||
        <NavLink to="/wishlist">Wishlist </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/home/:productID" element={<About1 />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
