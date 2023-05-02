import { useContext } from "react";
import { createContext, useState } from "react";
import { MenuContext } from "./MenuContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { exportData } = useContext(MenuContext);

  const { foodData, setFoodData } = exportData;

  const [cartData, setCartData] = useState([]);
  const [isCouponApplied, setisCouponApplied] = useState(false);

  const addFoodToCart = (e, itemId) => {
    if (e.target.innerText === "Add to Cart") {
      const itemToadd = foodData.find(({ id }) => id === itemId);
      setCartData([...cartData, { ...itemToadd, inCart: true }]);

      const item = foodData.map((item) =>
        item.id === itemId ? { ...item, inCart: true } : item
      );
      setFoodData(item);
    }
  };

  const couponApplied = () => {
    setisCouponApplied((isCouponApplied) => !isCouponApplied);
  };

  const incrementOrder = (foodId) => {
    const add = foodData.find(({ id }) => id === foodId);
    console.log(add);
    const addItem = cartData.map((item) =>
      item.id === foodId ? { ...item, count: (item?.count ?? 1) + 1 } : item
    );
    setCartData(addItem);
    // setCartData((cartData) => [...cartData, add]);
    console.log(cartData)
  };

  const decrementOrder = (foodId) => {
    const removeItems = cartData.filter(({ id }) => id === foodId);
    removeItems.shift();
    setCartData(removeItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        isCouponApplied,
        addFoodToCart,
        couponApplied,
        incrementOrder,
        decrementOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
