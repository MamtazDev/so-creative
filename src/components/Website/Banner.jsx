import { PlayCircle } from "@phosphor-icons/react";
import dashboard from "../../assets/website/dashboard.svg";

const Banner = () => {
  return (
    <div className="banner lg:pt-20 pt-[50px] pb-[190px]">
      <div className="max-w-[1280px] lg:mx-auto mx-[20px] text-center">
        <p className="text-[#0C0020] text-3xl lg:text-[72px] font-extrabold leading-[110%] mb-3">
          The easy way to <br className="lg:flex hidden" /> make videos
        </p>
        <p className="text-[#0C0020] text-lg font-medium mb-10">
          Produce high-quality video content without slow pace{" "}
          <br className="lg:flex hidden" /> and costs of traditional video
          production.
        </p>
        <div className="flex gap-4 items-center justify-center mb-[80px]">
          <button className="bg-indigo-600 rounded-full text-white text-base font-bold py-2 px-[20px] ">
            Talk to us
          </button>
          <button className="bg-indigo-100 py-2 pl-4 pr-2 rounded-full text-base font-bold text-indigo-600 flex items-center gap-1 ">
            Watch Video <PlayCircle size={24} />
          </button>
        </div>
        <img className="mx-auto" src={dashboard} alt="" />
      </div>
    </div>
  );
};

export default Banner;
