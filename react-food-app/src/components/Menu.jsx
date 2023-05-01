import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { CartContext } from "../context/CartContext";

export const Menu = () => {
  const { state, selectType, searchFood, finalData, SortData } =
    useContext(MenuContext);

  const { addFoodToCart } = useContext(CartContext);

  return (
    <>
      {state.isLoading ? (
        <h2>Hold on, we are fetching the food details..</h2>
      ) : state.isError ? (
        <h2>Something went wrong.. Please try again afters sometime.</h2>
      ) : (
        <>
          <header>
            <h2>Filters:</h2>
            <input
              type="text"
              placeholder="Search food here"
              onChange={searchFood}
            />
            <input
              type="checkbox"
              value="is_vegetarian"
              onChange={selectType}
            />
            Veg
            <input
              type="checkbox"
              value="is_spicy"
              onChange={selectType}
            />{" "}
            Spicy
            <input type="radio" value="LH" name="sorting" onChange={SortData} />
            Sort(price) Low to High
            <input type="radio" value="HL" name="sorting" onChange={SortData} />
            Sort(price) High to Low
          </header>
          {finalData.length ? (
            finalData?.map(
              ({
                id,
                name,
                description,
                price,
                image,
                delivery_time,
                inCart,
              }) => (
                <div className="list-food-items" key={id}>
                  <img src={image} alt={name} width="200px" height="200px" />
                  <p>Name: {name}</p>
                  <p>
                    <b>Description:</b>
                    {description} {name}
                  </p>
                  <p>Price: {price}</p>
                  <p>Delivery Time: {delivery_time}</p>
                  <button onClick={(e) => addFoodToCart(e, id)}>
                    {inCart ? (
                      <NavLink style={{ textDecoration: "none" }} to="/cart">
                        Go to Cart
                      </NavLink>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                </div>
              )
            )
          ) : (
            <h3>No Data found.</h3>
          )}{" "}
        </>
      )}
    </>
  );
};
