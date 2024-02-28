import help from "../assets/help.png";
import close from "../assets/close.png";
import search from "../assets/search.png";
import arrow from "../assets/arrow-right.png";

const Help = ({ setShowHelp }) => {
  const helps = [
    {
      title: "Getting Started",
      no: 2,
    },
    {
      title: "How to use SoCreative",
      no: 14,
    },
    {
      title: "Account and Subscription",
      no: 5,
    },
    {
      title: "Issues and Feedback",
      no: 4,
    },
    {
      title: "FAQs",
      no: 25,
    },
  ];
  return (
    <div className="fixed z-50 top-[84px] right-[210px]  w-full max-h-[85vh] overflow-y-auto no_scrollbar  bg-white rounded-2xl shadow-2xl  max-w-[448px]">
      <div className="p-6 border-b flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <img src={help} alt="" />
          <div>
            <p className="text-xl font-bold mb-1">Help</p>
            <p className="text-slate-500 text-sm font-medium">5 Collections</p>
          </div>
        </div>
        <button onClick={() => setShowHelp(false)}>
          <img src={close} alt="" />
        </button>
      </div>
      <div className="p-8">
        <div className="bg-slate-100 rounded-full flex items-center gap-3 pl-4 p-2 mb-8">
          <img src={search} alt="" />
          <input
            className="w-full bg-transparent"
            type="search"
            placeholder="Search for help"
          />
        </div>
        <div className="flex flex-col gap-4">
          {helps.map((data, index) => (
            <div
              className="border rounded-xl py-3 px-4 flex items-center gap-2 justify-between cursor-pointer"
              key={index}
            >
              <div>
                <p className="mb-2 text-base font-bold ">{data.title}</p>
                <p className="text-sm font-medium">{data.no} articles</p>
              </div>
              <img src={arrow} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
