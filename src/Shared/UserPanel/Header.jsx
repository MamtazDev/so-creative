import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import message from "../../assets/message-question.png";
import notification from "../../assets/notification.png";
import active from "../../assets/active.png";
import { useState } from "react";
import Notification from "./Notification";
import Credit from "./Credit";
import Help from "./Help";

const Header = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showCredit, setShowCredit] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between gap-4 p-6">
        <div className="w-full flex items-center gap-6">
          <Link to="/">
            <img className="max-w-60 h-10" src={logo} alt="" />
          </Link>
          <div className="flex items-center gap-5 rounded-full bg-white p-3 w-full max-w-xl">
            <img src={search} alt="" />
            <input
              className="w-full"
              type="search"
              placeholder="Search videos"
            />
          </div>
        </div>

        <div className="w-full flex justify-end items-center gap-4">
          <button
            onClick={() => setShowCredit(!showCredit)}
            className="bg-gradient-to-r from-purple-500 to-indigo-900 text-transparent bg-clip-text whitespace-nowrap hover:text-indigo-600 hover:border-indigo-600 transition-all duration-300 ease-in gradient_text text-sm font-semibold py-3 px-5 rounded-full border border-[#C67CFF]"
          >
            6 Credits Remaining
          </button>

          <button
            onClick={() => setShowHelp(!showHelp)}
            className="bg-white hover:bg-indigo-100 transition-all duration-300 ease-in rounded-full p-3"
          >
            <img src={message} alt="" />
          </button>
          <div
            onClick={() => setShowNotification(!showNotification)}
            className="relative"
          >
            <button className="absolute -top-1 -right-1 border-2 border-slate-50 bg-red-600 px-[5px] rounded-full text-white text-sm font-semibold">
              8
            </button>

            <button className="bg-white  hover:bg-indigo-100 transition-all duration-300 ease-in rounded-full p-3">
              <img src={notification} alt="" />
            </button>
          </div>
          <div className="relative">
            <button className="text-white text-sm font-semibold h-12 w-12 bg-[#4F16A5] rounded-full p-3">
              JA
            </button>

            <img className="absolute bottom-0 -right-1" src={active} alt="" />
          </div>
        </div>
      </div>
      {showNotification && (
        <Notification setShowNotification={setShowNotification} />
      )}
      {showCredit && <Credit setShowCredit={setShowCredit} />}
      {showHelp && <Help setShowHelp={setShowHelp} />}
    </div>
  );
};

export default Header;
