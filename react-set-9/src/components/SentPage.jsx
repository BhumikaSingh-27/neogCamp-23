import { useContext } from "react";
import { InboxContext } from "../contexts/InboxContext";
import { NavLink } from "react-router-dom";

export const SentPage = () => {
  const { emailData } = useContext(InboxContext);

  return (
    <>
      {emailData.map(({ id, subject }) => (
        <li key={id}>
          <NavLink to={`/sent/${id}`}>{subject}</NavLink>
        </li>
      ))}
    </>
  );
};
