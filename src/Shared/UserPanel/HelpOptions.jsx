import search from "../../assets/search.svg";
import arrow from "../../assets/arrow-right.svg";

const HelpOptions = ({ setStep }) => {
  const handleGetStarted = () => {
    setStep(2);
  };
  const helps = [
    {
      title: "Getting Started",
      no: 2,
      function: handleGetStarted,
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
    <div>
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
            onClick={data?.function}
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
  );
};

export default HelpOptions;
