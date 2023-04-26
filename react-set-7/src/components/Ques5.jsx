import { fakeFetch } from "../api/api5";
import { useEffect, useState } from "react";

export const Ques5 = () => {
  const [quote, setQuote] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const getNewQuote = async () => {
    setisLoading(true);
    try {
      const response = await fakeFetch();
      setQuote(response);
      setisLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNewQuote();
  }, []);
  return (
    <>
      <h1>Let's get some new Quotes</h1>
      {isLoading ? (
        <h1> Hold on, Loading quotes</h1>
      ) : (
        <>
          <p>"{quote?.content}"</p>
          <p>-{quote?.author}</p>
          <button onClick={getNewQuote}> New Quote </button>
        </>
      )}
    </>
  );
};
