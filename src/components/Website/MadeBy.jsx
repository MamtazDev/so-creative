import made from "../../assets/website/made-by.svg";
import madeSm from "../../assets/website/made-by-sm.svg";
import madelogo from "../../assets/website/made-by-logo.svg";
import madelogosm from "../../assets/website/made-by-logo-sm.svg";

const MadeBy = () => {
  return (
    <div className="max-w-[1280px] py-[57px] lg:py-[100px] relative lg:mx-auto mx-[20px] ">
      <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <p className="text-[#0C0020] text-4xl lg:text-[60px] font-bold leading-[125%] mb-2 lg:mb-4">
          Made by
        </p>
        <img className="block lg:hidden mx-auto" src={madelogosm} alt="" />
        <img className="hidden lg:block mx-auto" src={madelogo} alt="" />
      </div>
      <div>
        <img className="hidden lg:block" src={made} alt="" />
        <img className="block lg:hidden" src={madeSm} alt="" />
      </div>
    </div>
  );
};

export default MadeBy;
