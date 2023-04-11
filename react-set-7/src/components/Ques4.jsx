import { fakeFetch } from "../api/api4";
import { useState, useEffect } from "react";

export const Ques4 = () => {
  const [data, setGetData] = useState([]);
  const [filArr, setfilArr] = useState([]);

  const getData = async (url) => {
    try {
      const response = await fakeFetch(url);
      if (response.status === 200) {
        setGetData(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (event) => {
    const val = event.target.value;
    const arr = data.filter(({ company }) => company === val);
    setfilArr(val === "All Companies" ? data : arr);
  };

  useEffect(() => {
    getData("https://example.com/api/users");
  }, []);
  return (
    <>
      {data.length === 0 && <p>Loading...</p>}
      {data.length > 0 && (
        <>
          <h1>Users</h1>
          <p>
            Filter by company:{" "}
            <select onChange={changeHandler}>
              <option value="All Companies">All Companies</option>
              {data
                .map(({ company }) => company)
                .reduce(
                  (acc, cur) => (acc.includes(cur) ? [...acc] : [...acc, cur]),
                  []
                )
                .map((comp, index) => (
                  <option key={index} value={comp}>
                    {comp}
                  </option>
                ))}
            </select>
          </p>
          {filArr.map(({ name, email, website, company }, index) => (
            <li key={index}>
              <p>{name}</p>
              <p>{email}</p>
              <p>{website}</p>
              <p>{company}</p>
            </li>
          ))}
        </>
      )}
    </>
  );
};
