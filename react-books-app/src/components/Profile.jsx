import { useContext } from "react";
import { BookContext } from "../Context/BookContext";

export const Profile = () => {
  const { userData } = useContext(BookContext);
  const { name, bio, img } = userData;
  return (
    <>
      <h2>Profile</h2>
      <img src={img} alt={name} width="500px" height="300px" />
      <h3>Name: {name}</h3>
      <p>
        <b>Bio:</b> {bio}
      </p>
    </>
  );
};
