import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import message from "../assets/message-question.png";
import notification from "../assets/notification.png";
import active from "../assets/active.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-6">
      <div className="w-full flex items-center gap-6">
        {/* <Link to="/"> */}
        <img className="max-w-60 h-10" src={logo} alt="" />
        {/* </Link> */}
        <div className="flex items-center gap-5 rounded-full bg-white p-3 w-full max-w-xl">
          <img src={search} alt="" />
          <input type="search" placeholder="Search videos" />
        </div>
      </div>

      <div className="w-full flex justify-end items-center gap-4">
        <button className="whitespace-nowrap gradient_text text-sm font-semibold py-3 px-5 rounded-full border border-[#C67CFF] transition-all duration-300 ease-in hover:bg-[#C67CFF] hover:text-white">
          6 Credits Remaining
        </button>

        <button className="bg-white rounded-full p-3">
          <img src={message} alt="" />
        </button>
        <div className="relative">
          <button className="absolute -top-1 -right-1 border-2 border-slate-50 bg-red-600 px-[5px] rounded-full text-white text-sm font-semibold">
            8
          </button>

          <button className="bg-white rounded-full p-3">
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
  );
};

export default Header;
