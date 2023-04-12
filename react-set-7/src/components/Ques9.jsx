import { useState, useEffect } from "react";
import { fakeFetch } from "../api/api9";

export const Ques9 = () => {
  const [productData, setProductData] = useState([]);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setProductData(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(productData);
  useEffect(() => {
    getData("https://example.com/api/products");
  }, []);

  return (
    <div>
      {productData.length === 0 ? (
        <h2 style={{ color: "burlywood" }}>
          We are almost there with the products...
        </h2>
      ) : (
        <>
          <h1>Products</h1>
          <div style={{ textAlign: "left" }}>
            {productData.map(({ name, price, rating, quantity }, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid grey",
                  borderRadius: "0.5rem",
                  margin: "1rem",
                  padding: "1rem",
                }}
              >
                {name}{" "}
                <span style={{ marginLeft: "10rem", textAlign: "center" }}>
                  Ratings: {rating}
                </span>
                <p>{price}</p>
                <p>{quantity}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
