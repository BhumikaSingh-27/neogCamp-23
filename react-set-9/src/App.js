import { Routes, Route } from "react-router-dom";

import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { Inbox } from "./components/Inbox";
import { EmailPage } from "./components/EmailPage";
import { SentPage } from "./components/SentPage";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/inbox" element={<Inbox />}></Route>
        <Route path="/emailPage/:emailId" element={<EmailPage />}></Route>
        <Route path="/sent" element={<SentPage />}></Route>
        <Route path="/sent/:emailId" element={<EmailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
