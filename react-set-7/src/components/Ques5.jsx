import { useState, useEffect } from "react";
import { fakeFetch } from "../api/api5";

export const Ques5 = () => {
  const [quoteData, setQuoteData] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch();
      console.log(response);
      setQuoteData([response]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {quoteData.length === 0 ? (
        <p style={{ fontWeight: "bold", fontSize: "2rem" }}>
          Loading quotes, Hold on!!
        </p>
      ) : (
        <>
          {quoteData.map(({ content, author }, index) => (
            <p key={index}>
              "{content}"<br /> -{author}
            </p>
          ))}
        </>
      )}
    </div>
  );
};
