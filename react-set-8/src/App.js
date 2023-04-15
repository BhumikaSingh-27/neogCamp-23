import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/home"> Home</NavLink>||
        <NavLink to="/cart">MyCart</NavLink>
        <NavLink to="/wishlist">MyWishlist</NavLink>
      </nav>
      <h1>hello</h1>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/home/:itemId" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
