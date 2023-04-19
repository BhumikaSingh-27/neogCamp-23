import { createContext } from "react";
import { useEffect, useState } from "react";
import { fakeFetch } from "../data/api";

export const eCommerce = createContext();

export const ECommerceProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlistArr, setWishlistArr] = useState([]);

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

  const addItemToCart = (item) => {
    setCart((cart) => [...cart, item]);
  };

  const removeItem = (item) => {
    const filArr = cart.filter(({ id }) => id !== item);
    console.log("inside cart", filArr);
    setCart(filArr);
  };

  const addToWishlist = (item) => {
    setWishlistArr([...wishlistArr, item]);
  };

  const removeItemfromWishlist = (item) => {
    const filArr = wishlistArr.filter(({ id }) => id !== item);
    console.log("inside remove wishlist");
    console.log(filArr);
    setWishlistArr(filArr);
  };

  return (
    <eCommerce.Provider
      value={{
        data,
        cart,
        wishlistArr,
        addItemToCart,
        removeItem,
        addToWishlist,
        removeItemfromWishlist,
      }}
    >
      {children}
    </eCommerce.Provider>
  );
};
