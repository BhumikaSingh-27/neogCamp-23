import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

export const DoneTodoList = () => {
  const { data } = useContext(TodoContext);
  const count = data.filter(({ isCompleted }) => isCompleted);

  return (
    <>
      <h1>Done Todo</h1>
      <h2>Total Todo: {count.length}</h2>
      <ul>
        {data
          .filter(({ isCompleted }) => isCompleted)
          .map(({ id, title, description }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status: Done</p>
              <Link
                style={{
                  backgroundColor: "mediumvioletred",
                  color: "white",
                  borderRadius: "0.5rem",
                  padding: "0.5rem",
                  textDecoration: "none",
                }}
                to={`/todoDesc/${id}`}
              >
                Expand Todo
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
