import { useContext } from "react";
import { EmailContext } from "../context/EmailContext";

const Spam = () => {
  const { state } = useContext(EmailContext);
  return (
    <div>
      {state.spam.map(({ mId, content, subject }) => {
        return (
          <div key={mId}>
            <h2>{subject}</h2>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Spam;
