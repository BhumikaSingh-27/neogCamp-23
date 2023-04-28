import { useContext } from "react";
import { createContext, useState } from "react";
import { MenuContext } from "./MenuContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { exportData } = useContext(MenuContext);

  const { foodData, setFoodData } = exportData;

  const [cartData, setCartData] = useState([]);
  const [isCouponApplied, setisCouponApplied] = useState(false);

  const addFoodToCart = (itemId) => {
    const itemToadd = foodData.find(({ id }) => id === itemId);
    setCartData([...cartData, { ...itemToadd, inCart: true }]);

    const item = foodData.map((item) =>
      item.id === itemId ? { ...item, inCart: true } : item
    );
    setFoodData(item);
  };


  const couponApplied = () => {
    setisCouponApplied((isCouponApplied) => !isCouponApplied);
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        isCouponApplied,
        addFoodToCart,
        couponApplied,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
