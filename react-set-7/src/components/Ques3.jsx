import { fakeFetch } from "../api/api3";
import { useState, useEffect } from "react";

export const Ques3 = () => {
  const [moviedata, setMoviedata] = useState([]);
  const [filArr, setFilArr] = useState([]);

  const getData = async (url) => {
    try {
      const response = await fakeFetch(url);
      if (response.status === 200) {
        setMoviedata(response.data);
      }
      console.log(moviedata);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(moviedata);

  const showMoviesBasedOnYear = (event) => {
    const checkVal = event.target.value;
    const arr = moviedata.filter(({ year }) => year.toString() === checkVal);
    setFilArr(checkVal === "All" ? moviedata : arr);
  };
  console.log(filArr);
  useEffect(() => {
    getData("https://example.com/api/movies");
  }, []);

  return (
    <>
      {moviedata.length === 0 && <p>Loading...</p>}
      {moviedata.length > 0 && (
        <>
          <h1>Movies</h1>
          <p>Filter by Year:</p>
          <select onChange={showMoviesBasedOnYear}>
            <option value="All">All</option>
            {moviedata.map(({ year }, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
          <ul>
            {filArr.map(({ title, year, ratings }) => (
              <li >
                <p>Name: {title}</p>
                <p>Year:{year}</p>
                <p>Ratings: {ratings}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
