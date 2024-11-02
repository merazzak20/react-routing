import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h1>Hello I am home</h1>
      <Outlet />
    </div>
  );
};

export default Home;
