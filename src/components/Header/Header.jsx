import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h4>Navbar</h4>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">User</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
