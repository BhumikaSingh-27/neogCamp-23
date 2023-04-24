import { useContext } from "react";
import { createContext, useState } from "react";
import { MenuContext } from "./MenuContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { foodData, selectedFood, setSelectedFood } = useContext(MenuContext);

  const [cartData, setCartData] = useState([]);
  const [isCouponApplied, setisCouponApplied] = useState(false);

  const addFoodToCart = (itemId) => {
    const itemToadd = foodData.find(({ id }) => id === itemId);

    const item = selectedFood.map((item) =>
      item.id === itemId ? { ...item, inCart: true } : item
    );

    setCartData([...cartData, { ...itemToadd, inCart: true }]);
    setSelectedFood(item);
    // setTotalPrice(cartData.reduce((tot, cur) => cur.price + tot, 0))
    console.log(cartData);
  };

  //   useEffect(()=>{},[])
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
