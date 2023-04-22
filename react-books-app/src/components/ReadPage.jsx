import { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import { FavContext } from "../Context/FavContext";

export const ReadPage = () => {
  const { booksReadData, markAsRead } = useContext(BookContext);
  const { addBookToFav } = useContext(FavContext);
  return (
    <>
      {booksReadData.map(({ id, title, author, image, read }) => (
        <div className="book" key={id}>
          <img src={image} alt={title} width="200px" /> <p>{id}</p>{" "}
          <p>Title:{title}</p>
          <p>Author: {author}</p>
          <p>
            <button disabled={read} onClick={() => markAsRead(id)}>
              {read ? "Already Read" : "Mark as Read"}
            </button>{" "}
          </p>
          <p>
            <button onClick={() => addBookToFav(id)}>Add to Fav</button>
          </p>
        </div>
      ))}
    </>
  );
};
