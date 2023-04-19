import { useContext } from "react";

import { eCommerce } from "../context/eCommerce";

export const Cart = () => {
  const { cart, removeItem } = useContext(eCommerce);
  //   console.log(cart);

  return (
    <div>
      <h1>My Cart</h1>
      <h3> Items: {cart.length}</h3>
      <ul>
        {cart.map(
          (
            { id, name, description, price, quantity, category, brand },
            index
          ) => (
            <li key={id + index}>
              <p>Name:{name} </p>
              <p>Description:{description} </p>
              <p>Price:{price} </p>
              <p>quantity:{quantity} </p>
              <p>category:{category} </p>
              <p>brand:{brand} </p>{" "}
              <button onClick={() => removeItem(id)}>Remove from Cart</button>
              <hr />{" "}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
