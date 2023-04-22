import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../api/data";

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [ userData, setUserData] = useState([])
  const [booksReadData, setbooksReadData] = useState([]);

  const getData = async (url) => {
    try {
      let response = await fakeFetch(url);
      if (response.status === 200) {
        setBookData(response.data.books);
        setUserData(response.data.user)
        setbooksReadData(response.data.books.filter(({ read }) => read));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/books");
  }, []);

  const markAsRead = (bookId) => {
    const booksRead = bookData.find(({ id }) => id === bookId);
    setbooksReadData((booksReadData) => [
      ...booksReadData,
      { ...booksRead, read: true },
    ]);

    setBookData((bookData) => {
      return bookData.map((book) =>
        book.id === bookId ? { ...book, read: true } : book
      );
    });
  };

  return (
    <BookContext.Provider value={{ bookData, userData, markAsRead, booksReadData,setBookData }}>
      {" "}
      {children}{" "}
    </BookContext.Provider>
  );
};
