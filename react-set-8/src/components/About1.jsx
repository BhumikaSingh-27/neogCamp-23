import { useParams } from "react-router-dom";
import { useContext } from "react";

import { eCommerce } from "../context/eCommerce";

export const About1 = () => {
  const { productID } = useParams();
  const { data } = useContext(eCommerce);

  const productDetails = data.find(({ id }) => id.toString() === productID);

  if (!productDetails) {
    return (
      <>
        <h1>404 product not found</h1>
      </>
    );
  }
  return (
    <div>
      <h1>About</h1>
      <h3>Name: {productDetails?.name}</h3>
      <p>description: {productDetails?.description}</p>
      <p>price: {productDetails?.price}</p>
      <p>quantity: {productDetails?.quantity}</p>
      <p>category: {productDetails?.category}</p>
      <p>brand: {productDetails?.brand}</p>
    </div>
  );
};
