import { useContext } from "react";
import { InboxContext } from "../contexts/InboxContext";
import { useParams } from "react-router-dom";

export const EmailPage = () => {
  const { emailId } = useParams();
  const { emailData } = useContext(InboxContext);

  const individualEmail = emailData.find(({ id }) => id.toString() === emailId);
  return (
    <>
      {
        <>
          <h1>{individualEmail?.subject}</h1>
          <p>From: {individualEmail?.sender}</p>
          <p>Message: {individualEmail?.subject}</p>
        </>
      }
    </>
  );
};
