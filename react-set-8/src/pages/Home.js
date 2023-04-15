import { Link } from "react-router-dom";
import { fakeFetch } from "./api";
import { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    try {
      const response = await fakeFetch(url);
      if (response.status === 200) {
        setData(response.data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData("https://example.com/api/products");
  }, []);

  return (
    <>
      <h1>My Product landing page</h1>
      <ul>
        {data.products.map(({ id, name, description, price }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>{description}</p>Price:{price}
          </li>
        ))}
      </ul>
    </>
  );
};
