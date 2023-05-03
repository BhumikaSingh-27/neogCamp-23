import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { useParams } from "react-router";

const TodoDetails = () => {
  const { todoId } = useParams();
  const { data } = useContext(TodoContext);

  const todo = data.find(({ id }) => id.toString() === todoId);
  console.log(todo);
  return (
    <div>
      <h1>{todo?.title}</h1>
      <p>{todo?.description}</p>
      <p>Status: {todo?.isCompleted ? "done" : "Not Done"}</p>
    </div>
  );
};

export default TodoDetails;
