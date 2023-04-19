import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ForumContext } from "../context/ForumContext";

export const Answers = () => {
  const { quesNo } = useParams();
  const { fetchAnswer } = useContext(ForumContext);

  const obj = fetchAnswer(quesNo);
  console.log(obj);

  return (
    <>
      <h2>Answer:</h2>
      {obj?.answer?.length && <p>{obj?.answer}</p>}
    </>
  );
};
