import { useContext } from "react";
import { InboxContext } from "../contexts/InboxContext";
import { NavLink } from "react-router-dom";

export const Inbox = () => {
  const { emailData, count, markEmailAsRead } = useContext(InboxContext);
  const { readCount, unreadCount } = count;
  return (
    <>
      <h1>My Inbox</h1>
      <p>Unread Emails: {unreadCount?.length}</p>
      <p>Read Emails: {readCount?.length}</p>

      <ul>
        {emailData?.map(({ id, subject, read }) => (
          <li key={id}>
            <NavLink to={`/emailPage/${id}`}>{subject}</NavLink>{" "}
            {!read && (
              <button onClick={() => markEmailAsRead(id)}>Mark as Read</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
