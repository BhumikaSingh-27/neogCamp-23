import { createContext, useState } from "react";
import { fakeFetch } from "../api";
import { useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [data, setData] = useState([]);
 

  const getData = async (url) => {
    try {
      const response = await fakeFetch(url);
      if (response.status === 200) {
        setData(response.data.todos);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData("https://example.com/api/todos");
  }, []);

  const markAsDone = (todoid) => {
    setData((data) =>
      data.map((item) =>
        item.id === todoid ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  return (
    <TodoContext.Provider value={{ data, markAsDone }}>
      {children}
    </TodoContext.Provider>
  );
};
