import { ArrowUpRight } from "@phosphor-icons/react";
import { levelUp } from "../../utils/data";

const LevelUp = () => {
  return (
    <div className="level_up py-20">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-[#0C0020] text-3xl lg:text-[56px] font-extrabold mb-3 text-center">
          Learn and level up
        </p>
        <p className="text-[#0C0020] text-xl font-semibold text-center mb-20">
          We are here to guide your journey with comprehensive <br />
          training materials and seamless onboarding support
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {levelUp.map((data, index) => (
            <div className="relative" key={index}>
              <img src={data.pic} alt="" />
              <button className="absolute bottom-0 left-0 flex gap-2 items-center p-8 text-white font-bold text-2xl">
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
