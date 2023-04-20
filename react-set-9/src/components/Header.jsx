import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h1>My Mail Box</h1>
      <nav>
        <ul className="flex">
          <li>
            <NavLink to="/inbox">Inbox</NavLink>
          </li>
          <li>
            <NavLink to="/sent">Sent</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
