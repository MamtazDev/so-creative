import made from "../../assets/website/made-by.svg";

const MadeBy = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-20 relative">
      <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="mb-4 text-[#0C0020] text-3xl lg:text-[60px] font-bold leading-[125%]">
          Made by
        </p>
        <p className="text-[#0C0020] text-5xl lg:text-[128px] font-extrabold leading-[128px]">
          SoCreative
        </p>
      </div>
      <div className="">
        <img src={made} alt="" />
      </div>
    </div>
  );
};

export default MadeBy;
