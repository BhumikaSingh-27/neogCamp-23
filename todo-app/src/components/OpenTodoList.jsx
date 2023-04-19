import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

export const OpenTodoList = () => {
  const { data, obj } = useContext(TodoContext);
  const { openCount } = obj;

  //   const count = data.filter(({ isCompleted }) => !isCompleted);
  return (
    <>
      <h1>Open Todo</h1>
      <h2>Total Todo: {openCount.length}</h2>
      <ul>
        {data
          .filter(({ isCompleted }) => !isCompleted)
          .map(({ id, title, description }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Status: Not Done</p>
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
