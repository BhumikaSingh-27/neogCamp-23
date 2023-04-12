import { fakeFetch } from "../api/api6";
import { useEffect, useState } from "react";

export const Ques6 = () => {
  const [moviedata, setMoviedata] = useState([]);
  const [filArr, setFilArr] = useState([]);

  const getData = async (url) => {
    try {
      const { status, data } = await fakeFetch(url);
      if (status === 200) {
        setMoviedata(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const showMovies = (event) => {
    const checkGenre = event.target.value;
    setFilArr(
      checkGenre === "All"
        ? moviedata
        : moviedata.filter(({ genre }) => genre === checkGenre)
    );
  };
  useEffect(() => {
    getData("https://example.com/api/movies");
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <p>
        Filter by genre:{" "}
        <select onChange={showMovies}>
          <option value="All">All</option>
          {moviedata
            .map(({ genre }) => genre)
            .reduce(
              (acc, cur) => (acc.includes(cur) ? [...acc] : [...acc, cur]),
              []
            )
            .map((genre) => (
              <option value={genre}>{genre}</option>
            ))}
        </select>
      </p>
      <ul style={{listStyle: "inherit"}}>
        {filArr.map(({ title, year, genre }) => (
          <li>
            <p>{title}</p>
            <p>{year}</p>
            <p>{genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
