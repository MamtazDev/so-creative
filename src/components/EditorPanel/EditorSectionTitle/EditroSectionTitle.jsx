import { CalendarBlank, CaretDown, TextAa } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditroSectionTitle = ({ filter, handleFilterChange }) => {
  const route = useLocation();
  const [showSort, setShowSort] = useState(false);
  return (
    <div className="seciton_heading pb-6 flex items-center justify-between">
      <div className="title">
        <h3 className="text-2xl font-bold text-slate-900">
          {route.pathname === "/editor/all-projects"
            ? "All Projects"
            : route.pathname === "/editor/my-projects"
            ? "My Tasks"
            : "All Clients"}
        </h3>
      </div>

      <div className="sorting flex items-center gap-3">
        <div className="button_group bg-slate-100 rounded-full p-1">
          <button
            className={`text-xs font-medium text-slate-600 py-[6px] px-[10px] rounded-full ${
              filter === "All" && "bg-white text-text-slate-600"
            }`}
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>

          <button
            className={`text-xs font-medium text-slate-600 py-[6px] px-[10px] rounded-full ${
              filter === "Active" && "bg-white text-text-slate-600"
            }`}
            onClick={() => handleFilterChange("Active")}
          >
            Active
          </button>

          <button
            className={`text-xs font-medium text-slate-600 py-[6px] px-[10px] rounded-full ${
              filter === "Completed" && "bg-white text-text-slate-600"
            }`}
            onClick={() => handleFilterChange("Completed")}
          >
            Completed
          </button>
        </div>

        <div className="relative">
          <div
            onClick={() => setShowSort(!showSort)}
            className="bg-slate-100 border rounded-full p-1"
          >
            <button className="bg-white rounded-full p-1.5 text-xs font-medium flex items-center gap-1">
              Sort by: Last Modified <CaretDown size={12} weight="fill" />
            </button>
          </div>
          {showSort && (
            <div className="bg-white w-auto shadow-xl rounded-xl absolute z-50">
              <button className="text-sm font-medium flex items-center gap-3 px-4 py-2 border-b">
                <CalendarBlank size={16} weight="bold" /> Last Modified
              </button>
              <button className="text-sm font-medium flex items-center gap-3 px-4 py-2 border-b">
                <TextAa size={16} weight="bold" /> Alphabetical
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditroSectionTitle;
