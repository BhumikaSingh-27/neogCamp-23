import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { ProductList } from "./pages/ProjectList";
import { Cart } from "./pages/ProjectList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/"> Home</NavLink> ||
        <NavLink to="/cart"> Cart</NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
