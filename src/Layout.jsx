import { Outlet } from "react-router-dom";
import Navbar from "./ui/Navbar";

const Layout = ({ childrean }) => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet>{childrean}</Outlet>
    </div>
  );
};

export default Layout;
