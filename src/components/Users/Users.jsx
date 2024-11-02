import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h3>I am User</h3>
      <h2>Users: {users.length}</h2>
      <div className="users">
        {users.map((user, idx) => (
          <User key={idx} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
