import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserProfile = () => {
  const { users, showDetails, userInfo } = useContext(UserContext);
  return (
    <div>
      <h1>User Profile</h1>
      <h3>select any user from dropdown</h3>
      <select onChange={showDetails}>
        {users.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {/* <h2>Name: {name}</h2>
      <h2>Email: {email}</h2> */}
      <h2>Name: {userInfo.name}</h2>
      <h2>Email: {userInfo.email}</h2>
    </div>
  );
};

export default UserProfile;
