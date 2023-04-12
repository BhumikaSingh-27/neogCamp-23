import { useState, useEffect } from "react";
import { fakeFetch } from "../api/api9";

export const Ques10 = () => {
  const [productData, setProductData] = useState([]);
  const [filArr, setFAilArr] = useState([]);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setProductData(data.products);
        // setFAilArr(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const filterProducts = (event) => {
    const input = event.target.value;

    const arr = productData.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFAilArr(arr);
    // console.log(arr);
  };

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
          <label> Enter Product details:</label>{" "}
          <input type="text" onChange={filterProducts} />
          {filArr.map((item, index) => (
            <li>
              {item.name}
              <br />${item.price}
              <br />
              {item.quantity}
            </li>
          ))}
        </>
      )}
    </div>
  );
};
