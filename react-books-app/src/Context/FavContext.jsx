import { createContext, useState, useContext } from "react";
import { BookContext } from "./BookContext";

export const FavContext = createContext();

export const FavContextProvider = ({ children }) => {
  const [favData, setFavData] = useState([]);
  const { bookData, setBookData } = useContext(BookContext);

  const addBookToFav = (bookId) => {
    setFavData((favData) => [
      ...favData,
      bookData.find(({ id }) => id === bookId),
    ]);
    setBookData((bookData) => {
      return bookData.map((book) =>
        book.id === bookId ? { ...book, label: true } : book
      );
    });
  };

  return (
    <FavContext.Provider value={{ favData, addBookToFav }}>
      {children}
    </FavContext.Provider>
  );
};
