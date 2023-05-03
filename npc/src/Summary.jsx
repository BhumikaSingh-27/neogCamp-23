import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { Link } from "react-router-dom";

const Summary = () => {
  const { data } = useContext(TodoContext);

  return (
    <div>
      {data.map(({ id, title, description, isCompleted }) => (
        <div key={id}>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link to={`/todo/${id}`}> View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Summary;
