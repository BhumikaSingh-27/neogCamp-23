import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VideoContext } from "../contexts/VideoContext";

export const Header = () => {
  const { videoData } = useContext(VideoContext);

  const countLikes = videoData.filter(({ liked }) => liked);
  const countWatch = videoData.filter(({ inWatchList }) => inWatchList);

  const getStyle = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "none",
    padding: "1rem",
  });
  return (
    <>
      <nav className="nav-bar">
        <NavLink style={getStyle} className="navlink" to="/">
          Home
        </NavLink>
        <NavLink style={getStyle} className="navlink" to="/videos">
          Videos
        </NavLink>
        <NavLink style={getStyle} className="navlink" to="/likedVideos">
          Liked Videos({countLikes?.length})
        </NavLink>
        <NavLink style={getStyle} className="navlink" to="/watchLaterVideos">
          Watch later({countWatch?.length})
        </NavLink>
      </nav>
    </>
  );
};
