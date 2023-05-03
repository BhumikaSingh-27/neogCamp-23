import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "./api";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [data, setData] = useState([])

    const getData =async()=>{
        try{
            const {status,data } = await fakeFetch("https://example.com/api/todos")
            if(status === 200){
                setData(data.todos)
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getData()

    },[])
  return <TodoContext.Provider value={{data}}>{children}</TodoContext.Provider>;
};
