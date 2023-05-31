import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ name: null, email: null });
  //   const [email, setEmail] = useState(null);
  //   const [name, setName] = useState(null);

  const users = [
    {
      id: 1,
      name: "Tanay Pratap",
      email: "tanay@example.com",
      role: "Super Mentor",
    },
    {
      id: 2,
      name: "Tanvi Priya",
      email: "tanvi@example.com",
      role: "CEO",
    },
    {
      id: 3,
      name: "Akanksha Choudhary",
      email: "akanksha@example.com",
      role: "Super Mentor",
    },
  ];

  //   const showDetails = (e) => {
  //     const info = users.find(({ id }) => e.target.value === id.toString());
  //     setName(info.name);
  //     setEmail(info.email);
  //   };

  //   useEffect(() => {
  //     setName("TanayPratap");
  //     setEmail("tanay@example.com");
  //   }, []);

  const showDetails = (e) => {
    const info = users.find(({ id }) => e.target.value === id.toString());
    setUserInfo({ email: info.email, name: info.name });
  };

  useEffect(() => {
    setUserInfo({ name: "TanayPratap", email: "tanay@example.com" });
  }, []);

  return (
    <UserContext.Provider value={{ users, showDetails, userInfo }}>
      {children}
    </UserContext.Provider>
  );
};
