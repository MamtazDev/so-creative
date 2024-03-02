import close from "../../assets/close.png";
import secure from "../../assets/secure.png";
import credit from "../../assets/credit.png";
import minus from "../../assets/minus.png";
import creditPlus from "../../assets/creditPlus.png";
import { useState } from "react";

const Credit = ({ setShowCredit, creditRef }) => {
  const [count, setCount] = useState(2);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div
      ref={creditRef}
      className="fixed z-50 top-[84px] right-[210px]  w-full max-h-[85vh] overflow-y-auto no_scrollbar  bg-white rounded-2xl shadow-2xl  max-w-[448px]"
    >
      <div className="p-8">
        <div className="flex items-center gap-2 justify-between mb-8">
          <div>
            <p className="text-slate-500 text-xs font-medium mb-1">Balance</p>
            <p className="text-sm font-semibold">0 Credit</p>
          </div>
          <button onClick={() => setShowCredit(false)}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className="text-center mb-8">
          <img className="m-auto mb-4" src={credit} alt="" />
          <p className="text-2xl font-bold mb-2">Purchase Credit</p>
          <p className="text-slate-500 text-base font-normal">
            You can purchase one off credits for $500 each
          </p>
        </div>
        <div className="border rounded-full flex items-center justify-between gap-2 p-2 mb-8">
          <button onClick={handleDecrement}>
            <img src={minus} alt="" />
          </button>
          <p className="text-lg font-bold">{count} Credit</p>
          <button onClick={handleIncrement}>
            <img src={creditPlus} alt="" />
          </button>
        </div>
        <div className="flex justify-between gap-2 items-center">
          <p className="text-base font-normal">
            Total Cost: <span className="font-bold">$1,000.00</span>{" "}
          </p>
          <button className="bg-indigo-600 rounded-full text-base font-semibold text-white px-6 py-3">
            Purchase Now
          </button>
        </div>
      </div>
      <div className="bg-slate-100 flex items-center justify-center gap-3 p-4 ">
        <img src={secure} alt="" />
        <p className="text-sm font-medium">
          This is a secure 256-bit SSL encrypted payment.
        </p>
      </div>
    </div>
  );
};

export default Credit;
