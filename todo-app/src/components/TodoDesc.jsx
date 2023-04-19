import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

export const TodoDesc = () => {
  const { todoId } = useParams();
  const { data } = useContext(TodoContext);

  const todoInfo = data.find(({ id }) => id.toString() === todoId);

  return (
    <>
      <h1>Todo Description</h1>
      {todoInfo?.length === 0 ? (
        <>DataLoading...</>
      ) : (
        <ul>
          {
            <>
              <h2>Title: {todoInfo?.title}</h2>
              <p>
                <b>Description: </b>
                {todoInfo?.description}
              </p>
              <p>
                <b>Status:</b>{" "}
                {todoInfo?.isCompleted ? <>Done</> : <> Not Done</>}
              </p>
            </>
          }
        </ul>
      )}
    </>
  );
};
