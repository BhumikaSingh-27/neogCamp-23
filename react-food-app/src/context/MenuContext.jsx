import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../api";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [state, setState] = useState({ isLoading: false, isError: null });
  const [foodData, setFoodData] = useState([]);
  const [filterType, setFilterType] = useState([]);
  const [searchText, setSearchText] = useState(null);
  const [sortType, setSortType] = useState(null);

  const exportData = { foodData, setFoodData }; //exporting the data state variable with setter function

  const getData = async (url) => {
    setState({ ...state, isLoading: true });
    try {
      const response = await fakeFetch(url);
      if (response.status === 200) {
        setFoodData(response.data.menu);
        setState({ isError: null, isLoading: false });
      }
    } catch (e) {
      console.log(e);
      setState({ isError: e.message, isLoading: false });
    }
  };

  useEffect(() => {
    getData("https://example.com/api/menu");
  },[]);

  const selectType = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFilterType([...filterType, value]);
    } else {
      setFilterType(filterType.filter((ele) => ele !== value));
    }
  };

  const selectedTypeData =
    filterType.length !== 0
      ? foodData.filter((item) => {
          for (let type of filterType) {
            //[is_veg,is_spicy]
            if (!item[type]) {
              return false;
            }
          }
          return true;
        })
      : [...foodData];

  const searchFood = (e) => {
    const val = e.target.value;
    setSearchText(val);
  };

  const foodSearched = searchText
    ? selectedTypeData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : [...selectedTypeData];

  const SortData = (e) => {
    setSortType(e.target.value);
  };

  const finalData = sortType
    ? [...foodSearched].sort((a, b) =>
        sortType === "LH" ? a.price - b.price : b.price - a.price
      )
    : [...foodSearched];

  return (
    <MenuContext.Provider
      value={{ exportData, finalData, selectType, searchFood, SortData, state }}
    >
      {children}
    </MenuContext.Provider>
  );
};
