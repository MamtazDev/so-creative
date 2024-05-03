import { CaretRight } from "@phosphor-icons/react";
import React from "react";

const CommonSection = ({ title, subtitle, pic }) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <p className="text-[#0C0020] text-3xl lg:text-[48px] font-extrabold mb-4 leading-[64px]">
            {title}
          </p>

          <p
            className="text-[#0C0020] text-xl font-semibold mb-[33px]"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <button className="text-indigo-600 font-bold text-sm flex items-center gap-1">
            Learn More <CaretRight size={20} />
          </button>
        </div>
        <div>
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CommonSection;
