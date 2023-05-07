import { useContext } from "react";
import { EmailContext } from "../context/EmailContext";
import { Link } from "react-router-dom";

const Inbox = () => {
  const { state, dispatch } = useContext(EmailContext);
  const unreadCount = state.emailData.filter(({ unread }) => unread);

  const filterData = state.emailData.filter(({ unread, isStarred }) => {
    if (state.isUnread && state.starred) {
      return unread && isStarred;
    } else if (state.isUnread) {
      return unread;
    } else if (state.starred) {
      return isStarred;
    } else {
      return true;
    }
  });
  console.log(filterData);

  return (
    <div>
      <fieldset>
        <legend>Filters</legend>
        <input
          type="checkbox"
          checked={state.isUndread}
          onChange={() => dispatch({ type: "check_unread" })}
        />
        show unread emails
        <input
          type="checkbox"
          checked={state.starred}
          onChange={() => dispatch({ type: "check_star" })}
        />
        show starred
      </fieldset>
      <h3>unread: {unreadCount.length}</h3>
      {filterData.map((email) => {
        const { mId, subject, content, unread, isStarred } = email;
        return (
          <div key={mId}>
            <Link to={`/inbox/${mId}`}>
              <div className="email-container">
                <h1> {subject}</h1>
                <p>{content}</p>
                <button
                  onClick={() => dispatch({ type: "DELETE", payload: email })}
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "MARK_READ", payload: email })
                  }
                >
                  {unread ? "Mark as Read" : "mark Unread"}
                </button>
                <button
                  onClick={() => dispatch({ type: "REPORT", payload: email })}
                >
                  Report Spam
                </button>
                <span
                  onClick={() =>
                    dispatch({ type: "STAR_EMAIL", payload: email })
                  }
                >
                  {isStarred ? "Starred" : "Star⭐"}
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Inbox;
