import { useContext } from "react";
import { FavContext } from "../Context/FavContext";
import { BookContext } from "../Context/BookContext";

export const Favorites = () => {
  const { favData, addBookToFav } = useContext(FavContext);
  const { markAsRead } = useContext(BookContext);

  return (
    <>
      {favData.map(({ id, title, author, image }, index) => (
        <div className="book" key={id + index}>
          <img src={image} alt={title} width="200px" /> <p>{id}</p>{" "}
          <p>Title:{title}</p>
          <p>Author: {author}</p>
          <p>
            <button onClick={markAsRead}>Mark as Read</button>{" "}
          </p>
          <p>
            <button onClick={() => addBookToFav(id)}>Remove from Fav</button>
            {/* not impleted this functionality yet */}
          </p>
        </div>
      ))}
    </>
  );
};
