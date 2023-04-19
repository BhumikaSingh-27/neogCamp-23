import { Link } from "react-router-dom";
import { useContext } from "react";

import { eCommerce } from "..";

export const Home = () => {
  const { data, addItemToCart, addToWishlist } = useContext(eCommerce);
  //   console.log(wishlistArr);

  return (
    <div>
      <h1>Product Listing Page</h1>
      <ul>
        {data.map((item, index) => {
          const { id, name, description, price } = item;
          return (
            <li key={id + index}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>Price: {price}</p>
              <Link to={`/home/${id}`}>View Details</Link> <br />
              <button onClick={() => addItemToCart(item)}>Add to cart</button>
              <button onClick={() => addToWishlist(item)}>
                Add to wishlist
              </button>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
