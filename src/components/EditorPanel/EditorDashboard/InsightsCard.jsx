import taskIcon from "../../../assets/editor_panel/newproject_icon.svg";
import taskIcon2 from "../../../assets/editor_panel/inprogress.svg";

const InsightsCard = () => {
  return (
    <div className="insights_card_wrapper flex gap-8">
      <div className="insights_card_item max-w-[496px] w-full border border-slate-200 rounded-2xl p-6 flex justify-between">
        <div className="card_info">
          <h3 className="text-sm font-medium text-slate-500 pb-2">
            New Projects
          </h3>
          <p className="text-2xl font-medium text-slate-900">
            <span className="font-bold text-5xl mr-2">8</span>
            Tasks
          </p>
        </div>

        <div className="card_icon">
          <img src={taskIcon} alt="icon" />
        </div>
      </div>

      <div className="insights_card_item max-w-[496px] w-full border border-slate-200 rounded-2xl p-6 flex justify-between">
        <div className="card_info">
          <h3 className="text-sm font-medium text-slate-500 pb-2">
            In Progress
          </h3>
          <p className="text-2xl font-medium text-slate-900">
            <span className="font-bold text-5xl mr-2">12</span>
            Tasks
          </p>
        </div>

        <div className="card_icon">
          <img src={taskIcon2} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;
