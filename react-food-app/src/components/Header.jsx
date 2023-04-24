import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Header = () => {
  const { cartData } = useContext(CartContext);
  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">
          {" "}
          Home{" "}
        </NavLink>{" "}
        <NavLink className="navlink" to="/menu">
          Menu
        </NavLink>{" "}
        <NavLink className="navlink" to="/cart">
          Cart({cartData?.length})
        </NavLink>
      </nav>
    </>
  );
};
