import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../api";

export const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    try {
      let response = await fakeFetch(url);
      if (response.status === 200) {
        setData(response.data.questions);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData("https://example.com/api/questions");
  }, []);

  const fetchAnswer = (checkId) => {
    return data.find(({ id }) => id.toString() === checkId);
  };

  return (
    <ForumContext.Provider value={{ data, fetchAnswer }}>
      {" "}
      {children}
    </ForumContext.Provider>
  );
};
