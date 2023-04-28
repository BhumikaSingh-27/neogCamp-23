import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Welcome to Video Library</h1>
      <h3>
        To browse all the videos, click the button below or go to the videos
        page.
      </h3>

      <NavLink to="/videos">
        <button>Explore Video</button>
      </NavLink>
    </>
  );
};
