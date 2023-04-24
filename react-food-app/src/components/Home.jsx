import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Welcome to neoG Food Ordering App!</h1>

      <NavLink to="/menu"><button>
       Click here to order NOW!!
      </button></NavLink>
    </>
  );
};
