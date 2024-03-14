import { useLocation } from "react-router-dom";

const EditroSectionTitle = ({ filter, handleFilterChange }) => {
  const route = useLocation();
  return (
    <div className="seciton_heading pb-6 flex items-center justify-between">
      <div className="title">
        <h3 className="text-2xl font-bold text-slate-900">
          {route.pathname === "/editor/all-projects"
            ? "All Projects"
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

        <div className="sorting_dropdown bg-slate-100 rounded-full p-1">
          <select className="text-xs font-medium min-w-[167px] text-slate-900 focus:outline-none outline-none p-2 rounded-full">
            <option value="">Sort by: Last Modified</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EditroSectionTitle;
