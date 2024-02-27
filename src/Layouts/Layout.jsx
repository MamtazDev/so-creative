import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Sidebar from "../Shared/Sidebar";

const Layout = () => {
  return (
    <div className="h-screen">
      <Header />
      <div style={{ height: "calc(100vh - 97px )" }}>
        <div className="flex h-full">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
