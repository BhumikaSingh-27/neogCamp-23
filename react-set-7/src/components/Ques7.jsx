import { useState, useEffect } from "react";
import { fakeFetch } from "../api/api7";

export const Ques7 = () => {
  const [item, setItem] = useState([]);
  const [buttonText, setButtonText] = useState("L2H");

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setItem(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const sortProducts = () => {
    if (buttonText === "L2H") {
      setItem([...item.sort((a, b) => a.price - b.price)]);
    } else {
      setItem([...item.sort((a, b) => b.price - a.price)]);
    }
    setButtonText(buttonText === "L2H" ? "H2L" : "L2H");
  };

  useEffect(() => {
    getData("https://example.com/api/products");
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <button onClick={sortProducts}>
        {buttonText === "L2H"
          ? "Sort by Price Low to High"
          : "Sort by Price High to Low"}
      </button>
      <ul>
        {item.map(({ name, description, price, quantity }, index) => (
          <li key={index}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <p>Quantity:{quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
