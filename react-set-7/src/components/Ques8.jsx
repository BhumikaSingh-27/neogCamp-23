import { useState, useEffect } from "react";
import { fakeFetch } from "../api/api8";

export const Ques8 = () => {
  const [productData, setProductData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setProductData(data.products);
        setSortedData(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const sortData = (event) => {
    if (event.target.value === "L2H") {
      setSortedData([...productData.sort((a, b) => a.price - b.price)]);
    } else {
      setSortedData([...productData.sort((a, b) => b.price - a.price)]);
    }
  };
  useEffect(() => {
    getData("https://example.com/api/products");
  }, []);
  return (
    <div>
      {productData.length === 0 ? (
        <h2>Loading Product details...</h2>
      ) : (
        <>
          <button value="L2H" onClick={sortData}>
            Low To High
          </button>
          <button value="H2L" onClick={sortData}>
            High To Low
          </button>
          <button onClick={() => setSortedData([])}>Reset</button>
          <ul>
            {sortedData.map(({ name, description, price, quantity }, index) => (
              <li
                key={index}
                style={{
                  border: "1px solid orange",
                  padding: "1rem",
                  backgroundColor: "peachpuff",
                }}
              >
                {name}
                <br />
                {description}
                <br />${price}
                <br />
                quantity: {quantity}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
