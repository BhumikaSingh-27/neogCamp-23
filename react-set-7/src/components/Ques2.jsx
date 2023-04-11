import { fakeFetch } from "../api/api2";
import { useEffect, useState } from "react";

export const Ques2 = () => {
  const [getData, setGetData] = useState([]);
  const [userAddress, setUserAddress] = useState({});
  const [hideAdrress, setHideAddress] = useState(false);

  const getUserData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setGetData([data]);
        setUserAddress(data.address);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const clickHandler = (event) => {
    event.target.innerText = hideAdrress ? "Show Address" : "Hide Address";
    setHideAddress(!hideAdrress);
  };

  useEffect(() => {
    getUserData("https://example.com/api/user");
  }, []);

  return (
    <>
      <h1>User</h1>
      {getData.length === 0 && <p>Data is loading...</p>}
      <ul>
        {" "}
        {getData.length > 0 &&
          getData.map(({ name, email, phone }, index) => (
            <li key={index}>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
            </li>
          ))}
        <button onClick={clickHandler}>Show Address</button>
      </ul>
      {hideAdrress && (
        <div style={{ fontStyle: "italic", color: "red" }}>
          <p>{userAddress.street}</p>
          <p>{userAddress.suite}</p>
          <p>{userAddress.city}</p>
          <p>{userAddress.zipcode}</p>
        </div>
      )}
    </>
  );
};
