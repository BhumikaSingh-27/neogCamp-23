export const initialState = {
  emailData: [],
  spam: [],
  trash: [],

  isUnread: false,
  starred: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, emailData: action.payload };
    }
    case "DELETE": {
      const filterEmail = state.emailData.filter(
        ({ mId }) => mId !== action.payload.mId
      );
      return {
        ...state,
        emailData: filterEmail,
        trash: [...state.trash, action.payload],
      };
    }

    case "REPORT": {
      const filArr = state.emailData.filter(
        ({ mId }) => mId !== action.payload.mId
      );
      return {
        ...state,
        emailData: filArr,
        spam: [...state.spam, action.payload],
      };
    }
    case "MARK_READ": {
      const updateArr = state.emailData.map((email) =>
        email.mId === action.payload.mId
          ? { ...email, unread: !email.unread }
          : email
      );
      return { ...state, emailData: updateArr };
    }
    case "STAR_EMAIL": {
      const starEmail = state.emailData.map((email) =>
        email.mId === action.payload.mId
          ? { ...email, isStarred: !email.isStarred }
          : email
      );

      return { ...state, emailData: starEmail };
    }
    case "check_unread": {
      return { ...state, isUnread: !state.isUnread };
    }

    case "check_star": {
      return { ...state, starred: !state.starred };
    }
    default:
      return state;
  }
};
