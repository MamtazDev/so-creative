import activityImg from "../../../assets/editor_panel/acivity_img.svg";

const RecentActivities = () => {
  return (
    <div className="recent_activities_wrapper border border-slate-200 p-6 rounded-2xl">
      <div className="activity_card flex gap-2">
        <div className="left_activity_card">
          <img src={activityImg} alt="activity_img" />
        </div>
        <div className="right_activity_card">
          <h3 className="text-base font-semibold text-slate-900 pb-3">
            Shawn Mahbub{" "}
            <span className="bg-blue-500 text-xs font-bold text-white py-2 px-2 rounded ml-[6px]">
              Editor
            </span>
          </h3>
          <p className="text-sm font-normal text-slate-700">
            Accepted the job for the{" "}
            <span className="font-bold">Sales Strategies Video Series by</span>
            <span className="text-amber-600">@Sophia Chen</span>
          </p>

          <p>29 Apr, 2020 4:28 PM</p>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
