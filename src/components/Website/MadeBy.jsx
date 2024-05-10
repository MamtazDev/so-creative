import made from "../../assets/website/made-by.svg";
import madeSm from "../../assets/website/made-by-sm.svg";
const MadeBy = () => {
  return (
    <div className="max-w-[1280px] py-[57px] lg:py-[100px] relative lg:mx-auto mx-[20px] ">
      <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="mb-1 text-[#0C0020] text-4xl lg:text-[60px] font-bold leading-[125%]">
          Made by
        </p>
        <p className="text-[#0C0020] text-[56px] lg:text-[128px] font-extrabold leading-[64px] lg:leading-[128px]">
          SoCreative
        </p>
      </div>
      <div>
        <img className="hidden lg:block" src={made} alt="" />
        <img className="block lg:hidden" src={madeSm} alt="" />
      </div>
    </div>
  );
};

export default MadeBy;
