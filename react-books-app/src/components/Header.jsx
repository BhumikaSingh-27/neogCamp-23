import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">All Books</NavLink>
        <NavLink className="navlink" to="/favorites">Favorites</NavLink>
        <NavLink className="navlink" to="/readPage">Read</NavLink>
        <NavLink className="navlink" to="/profile">Profile</NavLink>
      </nav>
    </>
  );
};
