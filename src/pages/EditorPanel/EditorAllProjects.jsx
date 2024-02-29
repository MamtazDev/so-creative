import MyWorkTable from "../../components/EditorPanel/EditorDashboard/MyWorkTable";

const EditorAllProjects = () => {
  return (
    <>
      <div className="seciton_heading pb-6 flex items-center justify-between">
        <div className="title">
          <h3 className="text-2xl font-bold text-slate-900">All Projects</h3>
        </div>
        <div className="sorting flex gap-3">
          <div className="button_group bg-slate-100 rounded-full p-1">
            <button className="text-xs font-medium text-slate-600 p-2 bg-white rounded-full">
              All
            </button>
            <button className="text-xs font-medium text-slate-600 p-2">
              Active
            </button>
            <button className="text-xs font-medium text-slate-600 p-2">
              Completed
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
        </div>
      </div>

      <MyWorkTable/>
    </>
  );
};

export default EditorAllProjects;
