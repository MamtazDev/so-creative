import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Sidebar from "../Shared/Sidebar";
import ChatBot from "../Shared/ChatBot";

const Layout = () => {
  return (
    <div className="h-screen">
      <Header />
      <div style={{ height: "calc(100vh - 97px )" }}>
        <div className="flex h-full">
          <Sidebar />
          <div className="mr-8 mb-8 ml-8 p-10 bg-white rounded-3xl w-full overflow-y-auto no_scrollbar">
            <Outlet />
            <ChatBot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
