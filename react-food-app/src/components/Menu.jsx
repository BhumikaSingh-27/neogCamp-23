import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { CartContext } from "../context/CartContext";

export const Menu = () => {
  const { foodData, searchFood, selectedFood, selectType, SortData } =
    useContext(MenuContext);

  const { addFoodToCart } = useContext(CartContext);

  return (
    <>
      <header>
        <h2>Filters:</h2>
        <input
          type="text"
          placeholder="Search food here"
          onChange={searchFood}
        />
        <input type="checkbox" value="veg" onChange={selectType} />
        Veg
        <input type="checkbox" value="spicy" onChange={selectType} /> Spicy
        <input type="radio" value="LtoH" name="sorting" onChange={SortData} />
        Sort(price) Low to High
        <input type="radio" value="HtoL" name="sorting" onChange={SortData} />
        Sort(price) High to Low
      </header>

      {/* {foodData?.map(
        ({ id, name, description, price, image, delivery_time }) => (
          <div className="list-food-items" key={id}>
            <img src={image} alt={name} width="200px" height="200px" />
            <p>Name: {name}</p>
            <p>
              <b>Description:</b>
              {description} {name}
            </p>
            <p>Price: {price}</p>
            <p>Delivery Time: {delivery_time}</p>
            <button>Add to Cart</button>
          </div>
        )
      )} */}

      {selectedFood?.map(
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
            <button onClick={() => addFoodToCart(id)}>
              {inCart ? "Go to Cart" : "Add to Cart"}
            </button>
          </div>
        )
      )}
    </>
  );
};
