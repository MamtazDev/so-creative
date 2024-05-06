import { ArrowUpRight } from "@phosphor-icons/react";
import { levelUp } from "../../utils/data";

const LevelUp = () => {
  return (
    <div className="level_up lg:py-20 ">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-[#0C0020] text-3xl lg:text-[56px] font-extrabold mb-3 text-center leading-[64px] ">
          Learn and level up
        </p>
        <p className="text-[#0C0020] text-xl font-medium text-center mb-20">
          We are here to guide your journey with comprehensive
          <br className="lg:flex hidden " />
          training materials and <br className="lg:hidden flex" /> seamless
          onboarding support
        </p>
        <div className="grid grid-cols-1  lg:grid-cols-3  gap-8 lg:mx-0 mx-[20px]">
          {levelUp.map((data, index) => (
            <div className="relative" key={index}>
              <img className="w-full" src={data.pic} alt="" />
              <button
                className="absolute bottom-0 left-0 flex gap-2 items-center p-8 w-full text-white font-bold text-2xl  bg_levelBg "
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
