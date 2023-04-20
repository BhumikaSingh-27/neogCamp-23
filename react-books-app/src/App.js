import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "../src/components/Home";
import { Profile } from "../src/components/Profile";
import { Favorites } from "../src/components/Favorites";
import { ReadPage } from "../src/components/ReadPage";
import { Header } from "../src/components//Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route to="/" element={<Home />}></Route>
        <Route to="/profile" element={<Profile />}></Route>
        <Route to="/favorites" element={<Favorites />}></Route>
        <Route to="/readPage" element={<ReadPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
