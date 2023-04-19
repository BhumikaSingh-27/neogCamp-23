import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const Summary = () => {
  const { data, markAsDone } = useContext(TodoContext);
  console.log(data);
  return (
    <>
      {data?.length === 0 ? <h1>data loading...</h1> : <></>}
      <ul>
        {data?.map(({ id, title, description, isCompleted }) => (
          <li
            key={id}
            style={{
              textDecoration: isCompleted ? "line-through" : "",
            }}
          >
            <h3>{title}</h3>
            <p>{description}</p>
            {/* <p>Status: {isCompleted ? <>Done</> : <>Not Done</>}</p> */}
            <p>
              <button onClick={() => markAsDone(id)}>
                {isCompleted ? "Mark as undone" : "Mark as Done"}
              </button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
