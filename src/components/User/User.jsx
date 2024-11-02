import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email } = user;
  const userStyle = {
    border: "2px solid red",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <Link to={`/user/${id}`}>Details</Link>
    </div>
  );
};

export default User;
