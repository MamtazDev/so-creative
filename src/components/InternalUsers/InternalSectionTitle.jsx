/* eslint-disable react/prop-types */
import { UserPlus } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";

const InternalSectionTitle = ({ filter, handleFilterChange }) => {
  const route = useLocation();
  return (
    <div className="seciton_heading pb-6 flex items-center justify-between">
      <div className="title">
        <h3 className="text-2xl font-bold text-slate-900">
          {route.pathname === "/internal-users"
            ? "10 Internal Users"
            : "All Clients"}
        </h3>
      </div>

      <div className="sorting flex items-center gap-3">
        <div className="button_group bg-slate-100 rounded-full p-1">
          <button
            className={`text-xs font-medium text-slate-600 py-[6px] px-[10px] rounded-full ${
              filter === "All" && "bg-white text-text-slate-600"
            }`}
            onClick={() => handleFilterChange("All")}>
            All
          </button>

          <button
            className={`text-xs font-medium text-slate-600 py-[6px] px-[10px] rounded-full ${
              filter === "Active" && "bg-white text-text-slate-600"
            }`}
            onClick={() => handleFilterChange("Admin")}>
            Admin
          </button>

          <button
            className={`text-xs font-medium text-slate-600 py-[6px] px-[10px] rounded-full ${
              filter === "Completed" && "bg-white text-text-slate-600"
            }`}
            onClick={() => handleFilterChange("Account Manager")}>
            Account Manager
          </button>

          <button
            className={`text-xs font-medium text-slate-600 py-[6px] px-[10px] rounded-full ${
              filter === "Completed" && "bg-white text-text-slate-600"
            }`}
            onClick={() => handleFilterChange("Editor")}>
            Editor
          </button>
        </div>

        <div className="sorting_dropdown bg-slate-100 rounded-full p-1">
          <select
            name=""
            id=""
            className="text-xs font-medium text-slate-900 focus:outline-none outline-none p-2 rounded-full">
            <option value="">Sort by: Last Modified</option>
          </select>
        </div>

        <button className="text-xs font-semibold text-white bg-black flex gap-2 py-[10px] px-[16px] rounded-full">
          <UserPlus size={16} />
          Invite User
        </button>
      </div>
    </div>
  );
};

export default InternalSectionTitle;
