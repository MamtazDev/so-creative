import arrow from "../../assets/arrow-right.png";
import arrowLeft from "../../assets/arrow-left.png";

const GettingStarted = ({ setStep }) => {
  const handleStep = () => {
    setStep(3);
  };
  const gettingStarted = [
    {
      query: "How to change the email address of your account?",
      time: "2",
      function: handleStep,
    },
    {
      query: "How to apply a promo code?",
      time: "3",
    },
    {
      query: "How to download your invoices?",
      time: "3",
    },
    {
      query: "How to cancel your subscription?",
      time: "3",
    },
    {
      query: "How collaborator charges are calculated",
      time: "3",
    },
  ];
  return (
    <div>
      <div className=" flex items-center gap-3  mb-8">
        <img src={arrowLeft} alt="" />
        <p className="text-base text-indigo-600 font-bold">Getting Started</p>
      </div>
      <div className="flex flex-col gap-4">
        {gettingStarted.map((data, index) => (
          <div
            onClick={data?.function}
            className="border rounded-xl py-3 px-4 flex items-center gap-2 justify-between cursor-pointer"
            key={index}
          >
            <div>
              <p className="mb-2 text-base font-bold ">{data.query}</p>
              <p className="text-sm font-medium">
                updated {data.time} months ago
              </p>
            </div>
            <img src={arrow} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GettingStarted;
