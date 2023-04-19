import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

export const DoneTodoList = () => {
  const { data } = useContext(TodoContext);

  return (
    <>
      <h1>Done Todo</h1>
      <ul>
        {data
          .filter(({ isCompleted }) => isCompleted)
          .map(({ id, title, description }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status: Done</p>
              <Link to={`/todoDesc/${id}`}>Expand Todo</Link>
            </li>
          ))}
      </ul>
    </>
  );
};
