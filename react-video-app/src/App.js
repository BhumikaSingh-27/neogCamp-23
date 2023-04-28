import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { VideoList } from "./components/VideoList";
import { LikedVideos } from "./components/LikedVideos";
import { WatchLaterVideo } from "./components/WatchLaterVideo";
import { VideoDetail } from "./components/VideoDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos" element={<VideoList />}></Route>
        <Route path="/likedVideos" element={<LikedVideos />}></Route>
        <Route path="/watchLaterVideos" element={<WatchLaterVideo />}></Route>
        <Route path="/videos/:videoId" element={<VideoDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
