import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const Done = () => {
  const { data } = useContext(TodoContext);
  return (
    <div>
      {data.map(
        ({ id, title, description, isCompleted }) =>
          isCompleted && (
            <>
              {" "}
              <div key={id}>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            </>
          )
      )}
    </div>
  );
};

export default Done;
