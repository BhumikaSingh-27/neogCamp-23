import { useContext } from "react";
import { ForumContext } from "../context/ForumContext";
import { Link, NavLink } from "react-router-dom";

export const Questions = () => {
  const { data } = useContext(ForumContext);

  return (
    <>
      <h2>Question List</h2>
      <ul>
        {data.map(({ id, question }) => (
          <li key={id}>
            <h1>{question}</h1>{" "}
            <p>
              {" "}
              <Link className="link" style={{ padding: "1rem" }}>
                {" "}
                upvote
              </Link>{" "}
              <Link className="link" style={{ padding: "1rem" }}>
                {" "}
                downvote
              </Link>{" "}
              <NavLink
                className="link"
                style={{ padding: "1rem" }}
                to={`/answers/${id}`}
              >
                {" "}
                answer
              </NavLink>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
