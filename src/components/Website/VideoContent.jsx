import React, { useState } from "react";
import { videoContentTab } from "../../utils/data";
import CommonSection from "../../Shared/Website/CommonSection";
import experlences from "../../assets/learnanddrv.png";

const VideoContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="video_content py-20">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-3xl lg:text-[56px] font-extrabold leading-[64px] text-[#0C0020] mb-10">
          For teams that create <br />
          <span className="text-indigo-600"> video content at scale</span>
        </p>
        <div className="max-w-[817px] mx-auto w-full rounded-full bg-stone-100 p-1 flex items-center mb-20 overflow-x-auto no_scrollbar ">
          {videoContentTab.map((data, index) => (
            <button
              className={`${
                activeTab === index ? "bg-white rounded-full" : ""
              } text-[#0C0020] font-semibold text-sm py-4 px-7 whitespace-nowrap`}
              onClick={() => setActiveTab(index)}
              key={index}
              p
            >
              {data}
            </button>
          ))}
        </div>

        <div>
          <CommonSection
            title="Create immersive learning experiences"
            subtitle="Empower your team to excel with engaging 
            and interactive content that caters to diverse
            learning styles."
            pic={experlences}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
