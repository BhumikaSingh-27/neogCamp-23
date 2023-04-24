import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../api";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);

  const getData = async (url) => {
    try {
      const response = await fakeFetch(url);
      if (response.status === 200) {
        setFoodData(response.data.menu);
        setSelectedFood(response.data.menu);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData("https://example.com/api/menu");
  }, []);

  const searchFood = (e) => {
    const nameCheck = e.target.value;
    const searchedFood = foodData.filter(({ name }) =>
      name.toLowerCase().includes(nameCheck.toLowerCase())
    );
    console.log(searchedFood);
    setSelectedFood(searchedFood);
  };

  const selectType = (e) => {
    // console.log(e.target.value)
    if (e.target.checked && e.target.value === "veg") {
      setSelectedFood(foodData.filter(({ is_vegetarian }) => is_vegetarian));
    } else if (e.target.checked && e.target.value === "spicy") {
      setSelectedFood(foodData.filter(({ is_spicy }) => is_spicy));
    } else {
      setSelectedFood(foodData);
    }
  };

  const SortData = (e) => {
    let sortedData = [];
    if (e.target.value === "LtoH") {
      sortedData = foodData.sort((a, b) => a.price - b.price);
    } else {
      sortedData = foodData.sort((a, b) => b.price - a.price);
    }

    setSelectedFood([...sortedData]);
  };
  return (
    <MenuContext.Provider
      value={{ foodData, selectedFood, searchFood, selectType, SortData,setSelectedFood }}
    >
      {children}
    </MenuContext.Provider>
  );
};
