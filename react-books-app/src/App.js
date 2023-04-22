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
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/readPage" element={<ReadPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
