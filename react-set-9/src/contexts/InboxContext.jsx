import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../api";

export const InboxContext = createContext();

export const InboxContextProvider = ({ children }) => {
  const [emailData, setEmailData] = useState([]);

  const readCount = emailData.filter(({ read }) => read);
  const unreadCount = emailData.filter(({ read }) => !read);
  const count = { readCount, unreadCount };

  const getEmailData = async (url) => {
    try {
      const response = await fakeFetch(url);
      if (response.status === 200) {
        setEmailData(response.data.emails);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEmailData("https://example.com/api/allemails");
  }, []);

  console.log(emailData);
  
  const markEmailAsRead = (checkId) => {
    const email = emailData.map((data) =>
      data.id === checkId ? { ...data, read: !data.read } : data
    );
    setEmailData(email);
  };
  return (
    <InboxContext.Provider value={{ emailData, count, markEmailAsRead }}>
      {children}
    </InboxContext.Provider>
  );
};
