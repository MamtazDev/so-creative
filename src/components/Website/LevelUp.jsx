import { ArrowUpRight } from "@phosphor-icons/react";
import { levelUp } from "../../utils/data";

const LevelUp = () => {
  return (
    <div className="level_up py-7 lg:py-20 ">
      <div className="max-w-[1280px] mx-[20px] lg:mx-auto">
        <p className="text-[#0C0020] text-4xl lg:text-[56px] font-extrabold mb-3 text-center leading-[40px] lg:leading-[64px] ">
          Learn and level up
        </p>
        <p className="text-[#0C0020] text-lg lg:text-xl font-medium text-center mb-8 lg:mb-20">
          We are here to guide your journey with comprehensive
          <br className="lg:block hidden " />
          training materials and <br className="lg:block hidden" /> seamless
          onboarding support
        </p>
        <div className="grid grid-cols-1  lg:grid-cols-3  gap-8  ">
          {levelUp.map((data, index) => (
            <div className="relative" key={index}>
              <img className="w-full" src={data.pic} alt="" />
              <button
                className="absolute bottom-0 left-0 flex gap-2 items-center p-6 lg:p-8 w-full text-white font-bold text-xl lg:text-2xl  bg_levelBg "
                style={{}}
              >
                {data.label} <ArrowUpRight size={24} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelUp;
