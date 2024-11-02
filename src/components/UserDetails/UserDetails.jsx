import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, phone } = user;
  const detailsStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div>
      <h2>Details User</h2>
      <div style={detailsStyle}>
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserDetails;
