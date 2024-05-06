import { useState } from "react";
import { videoContentTab } from "../../utils/data";
// import CommonSection from "../../Shared/Website/CommonSection";
import experlences from "../../assets/learnanddrv.png";

const VideoContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="video_content py-20">
      <div className=" mx-auto">
        <p className="text-center text-3xl lg:text-[56px] font-extrabold leading-[64px] text-[#0C0020] mb-10">
          For teams that create <br />
          <span className="text-indigo-600"> video content at scale</span>
        </p>
        <div className="lg:max-w-[817px] mx-auto w-full rounded-full bg-stone-100 p-1 flex items-center mb-20 overflow-x-auto no_scrollbar ">
          {videoContentTab.map((data, index) => (
            <button
              className={`${
                activeTab === index ? "bg-white rounded-full" : ""
              } text-[#0C0020] font-semibold text-sm py-4 px-7 whitespace-nowrap`}
              onClick={() => setActiveTab(index)}
              key={index}
            >
              {data}
            </button>
          ))}
        </div>

        <div>
          {/* <CommonSection
            title="Create immersive learning experiences"
            subtitle="Empower your team to excel with engaging 
            and interactive content that caters to diverse
            learning styles."
            pic={experlences}
          />
           */}
          <div className="max-w-[1280px] mx-auto">
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-20 lg:mx-0 mx-[20px]">
              <div>
                <p className="text-[#0C0020] text-3xl lg:text-[24px] font-extrabold mb-4 leading-[32px]">
                  Create immersive learning experiences
                </p>
                <p className="text-[#0C0020] text-xl font-medium mb-[33px]">
                  Empower your team to excel with engaging <br /> and
                  interactive content that caters to diverse <br /> learning
                  styles.
                </p>
                <button className="flex items-center text-indigo-600 font-bold text-[20px]  gap-1 leading-[140%]">
                  <span>Learn More</span>
                  <svg
                    style={{ marginTop: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M14.4118 10.8532L8.16178 17.1032C7.98566 17.2793 7.74679 17.3783 7.49772 17.3783C7.24865 17.3783 7.00978 17.2793 6.83366 17.1032C6.65754 16.9271 6.55859 16.6882 6.55859 16.4391C6.55859 16.1901 6.65754 15.9512 6.83366 15.7751L12.4204 10.1899L6.83522 4.60319C6.74801 4.51598 6.67884 4.41245 6.63164 4.29851C6.58445 4.18457 6.56016 4.06245 6.56016 3.93913C6.56016 3.8158 6.58445 3.69368 6.63164 3.57974C6.67884 3.4658 6.74801 3.36227 6.83522 3.27506C6.92243 3.18786 7.02595 3.11868 7.13989 3.07149C7.25383 3.02429 7.37595 3 7.49928 3C7.62261 3 7.74473 3.02429 7.85867 3.07149C7.97261 3.11868 8.07614 3.18786 8.16334 3.27506L14.4133 9.52506C14.5006 9.61226 14.5699 9.71584 14.6171 9.82985C14.6642 9.94386 14.6884 10.0661 14.6883 10.1895C14.6882 10.3128 14.6637 10.435 14.6162 10.5489C14.5688 10.6628 14.4993 10.7662 14.4118 10.8532Z"
                      fill="#4F46E5"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <img src={experlences} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;