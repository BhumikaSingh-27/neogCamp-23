import { useState, useEffect } from "react";
import { fakeFetch } from "../api/api9";

export const Ques10 = () => {
  const [productData, setProductData] = useState([]);
  const [searchStr, setSearchStr] = useState("");

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

  useEffect(() => {
    getData("https://example.com/api/products");
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setSearchStr(event.target.value)}
      />
      {productData.length === 0 && <p>Data is loading...</p>}

      {searchStr.length === 0 &&
        productData.map((item, index) => (
          <li key={index}>
            {item.name}
            <br />${item.price}
            <br />
            {item.quantity}
          </li>
        ))}

      {searchStr.length > 0 &&
        (productData.filter(({ name }) =>
          name.toLowerCase().includes(searchStr.toLowerCase())
        ).length === 0 ? (
          <p>Item not found...</p>
        ) : (
          (productData
            .filter((product) =>
              product.name.toLowerCase().includes(searchStr.toLowerCase())
            ))
            .map((item, index) => (
              <li key={index}>
                {item.name}
                <br />${item.price}
                <br />
                {item.quantity}
              </li>
            ))
        ))}

      {/* {
        searchStr.
      } */}

      {/* {productData.length === 0 ? (
        <h2 style={{ color: "burlywood" }}>
          We are almost there with the products...
        </h2>
      ) : (
        <>
          <h1>Products</h1>
          <label> Enter Product details:</label>{" "}
          <input type="text" onChange={filterProducts} />
          {filArr.length > 0 ? (
            filArr.map((item, index) => (
              <li key={index}>
                {item.name}
                <br />${item.price}
                <br />
                {item.quantity}
              </li>
            ))
          ) : (
            <p>Item not found</p>
          )}
        </>
      )} */}
    </div>
  );
};
