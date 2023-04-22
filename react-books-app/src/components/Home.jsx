import { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import { FavContext } from "../Context/FavContext";

export const Home = () => {
  const { bookData, markAsRead } = useContext(BookContext);
  const { addBookToFav } = useContext(FavContext);

  return (
    <>
      {bookData.map(({ id, title, author, image, read, label }) => (
        <div className="book" key={id}>
          <img src={image} alt={title} width="200px" /> <p>{id}</p>{" "}
          <p>Title:{title}</p>
          <p>Author: {author}</p>
          <p>
            <button disabled={read} onClick={() => markAsRead(id)}>
              {read ? "Mark as Read" : "Already Read"}
            </button>{" "}
          </p>
          <p>
            <button onClick={() => addBookToFav(id)}>
              {label ? "Go to Fav" : "Add to Fav"}
            </button>
          </p>
        </div>
      ))}
    </>
  );
};
