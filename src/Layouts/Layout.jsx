import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Sidebar from "../Shared/Sidebar";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
