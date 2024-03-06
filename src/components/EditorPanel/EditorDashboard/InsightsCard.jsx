import { insightsCardData } from "../../../utils/data";

const InsightsCard = () => {
  return (
    <>
      <div className="insights_card_wrapper flex gap-8">
        {insightsCardData.map((insightsItem, index) => (
          <div
            className="insights_card_item max-w-[496px] w-full border border-slate-200 rounded-2xl p-6 flex justify-between"
            key={index}>
            <div className="card_info">
              <h3 className="text-sm font-medium text-slate-500 pb-2">
                {insightsItem.name}
              </h3>
              <p className="text-2xl font-medium text-slate-900">
                <span className="font-bold text-5xl mr-2">
                  {insightsItem.number}
                </span>
                Tasks
              </p>
            </div>

            <div className="card_icon">
              <img src={insightsItem.icon} alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InsightsCard;
