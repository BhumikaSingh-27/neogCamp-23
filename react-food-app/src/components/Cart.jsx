import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cartData, couponApplied, isCouponApplied } = useContext(CartContext);

  const price = cartData.reduce((tot, cur) => cur.price + tot, 0);
  const totalPrice = isCouponApplied ? price - 5 : price;
  console.log("inside cart", cartData);
  let TotalDeliveryTime = cartData.reduce(
    (tot, cur) => cur.delivery_time + tot,
    0
  );

  return (
    <>
      <h2>Cart</h2>
      <h3>Total DeliveryTime: {TotalDeliveryTime}</h3>
      <h3>Total Price: $ {totalPrice}</h3>
      {/* <button
        id="inCart"
        onClick={() => setTotalPrice((totalPrice) => totalPrice - 5)}
      > */}
      <button id="inCart" onClick={() => couponApplied()}>
        Apply coupon
      </button>
      {cartData?.map(
        ({ id, name, description, price, image, delivery_time, inCart }) => (
          <div className="list-food-items" key={id}>
            <img src={image} alt={name} width="200px" height="200px" />
            <p>Name: {name}</p>
            <p>
              <b>Description:</b>
              {description} {name}
            </p>
            <p>Price: {price}</p>
            <p>Delivery Time: {delivery_time}</p>
          </div>
        )
      )}
    </>
  );
};
