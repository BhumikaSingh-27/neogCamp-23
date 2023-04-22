import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavContext } from "../Context/FavContext";
import { BookContext } from "../Context/BookContext";

export const Header = () => {
  const { favData } = useContext(FavContext);
  const { booksReadData } = useContext(BookContext);
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">
          All Books
        </NavLink>
        <NavLink className="navlink" to="/favorites">
          Favorites({favData?.length})
        </NavLink>
        <NavLink className="navlink" to="/readPage">
          Read({booksReadData?.length})
        </NavLink>
        <NavLink className="navlink" to="/profile">
          Profile
        </NavLink>
      </nav>
    </>
  );
};
