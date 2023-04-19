import { useContext } from "react";
import { eCommerce } from "..";

export const Wishlist = () => {
  const { wishlistArr, removeItemfromWishlist } = useContext(eCommerce);
  //   console.log(wishlistArr);

  return (
    <div>
      <h1>My Wishlist</h1>
      <h3> Items: {wishlistArr?.length}</h3>
      <ul>
        {wishlistArr?.map(
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
              <button onClick={() => removeItemfromWishlist(id)}>
                Remove from Cart
              </button>
              <hr />{" "}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
