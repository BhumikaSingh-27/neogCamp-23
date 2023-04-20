import { createContext, useState, useEffect } from "react";


export const BookContext = createContext();

    

export const BookContextProvider =({children}) =>{

    const [ bookData, setBookData ] = useState([]);

    useEffect(()=>{

    })
    return <BookContext.Provider> {children} </BookContext.Provider>
}