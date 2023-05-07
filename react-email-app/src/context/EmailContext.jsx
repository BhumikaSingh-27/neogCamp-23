import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { mails } from "../data";

export const EmailContext = createContext();

const EmailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "GET_DATA", payload: mails });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <EmailContext.Provider value={{ state, dispatch }}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailContextProvider;
