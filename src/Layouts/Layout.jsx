import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Sidebar from "../Shared/Sidebar";
import profile from "../assets/profile.png";

const Layout = () => {
  return (
    <div className="h-screen">
      <Header />
      <div style={{ height: "calc(100vh - 97px )" }}>
        <div className="flex h-full">
          <Sidebar />
          <div className="mr-8 mb-8 ml-8 p-10 bg-white rounded-3xl w-full overflow-y-auto">
            <Outlet />
            <button className="fixed bottom-14 right-14">
              <img src={profile} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
