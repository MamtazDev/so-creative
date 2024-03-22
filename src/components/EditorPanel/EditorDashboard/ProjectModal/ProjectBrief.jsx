import { CaretDown, CaretUp, DownloadSimple } from "@phosphor-icons/react";
import React, { useState } from "react";
import landscape from "../../../../assets/landscape.svg";
import pdf from "../../../../assets/pdf.svg";
import aveter from "../../../../assets/aveter1.svg";

const ProjectBrief = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const maxWords = 110;
  const text =
    " This project aims to create a video series focusing on impactful sales strategies for businesses of all sizes. The series will leverage your on-demand video editing service to showcase its capabilities and attract potential clients, while providing valuable and actionable sales advice. <br /> <br /> To achieve your project goals, a multifaceted approach blending  content marketing, social media engagement, and strategic partnerships is essential. Crafting informative blog posts, videos, and social media content showcasing the benefits of your on-demand video editing service will help increase brand awareness and position your company as thought leaders in the sales and marketing realm. Implementing targeted advertising campaigns to reach potential clients and offering valuable resources such as eBooks or webinars on leveraging video editing for sales enhancement will generate leads and conversions. Collaborating with industry influencers and participating in relevant events or webinars will further solidify your company's reputation and expand your reach within the sales and marketing community.";

  const truncateText = (text, maxWords) => {
    const words = text?.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  const tabs = ["Supporting Materials", "Add-Ons"];

  return (
    <div>
      <div>
        <p className="text-slate-500 font-normal text-sm mb-2">Project Name</p>
        <p className="text-2xl font-bold mb-6">Architectural Project Video</p>
        <div className="flex items-center gap-4 justify-between mb-8">
          <div className="flex items-center gap-6">
            <p className="text-sm text-slate-500 font-normal">Video Type</p>
            <p className="text-sm font-medium">Social Media Video</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-sm text-slate-500 font-normal">Presenter </p>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6 rounded-full" src={aveter} alt="" />
              <p className="text-sm font-medium"> James Daher</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-sm text-slate-500 font-normal">Aspect Ratio</p>
            <div className="flex items-center gap-2">
              <img src={landscape} alt="" />
              <p className="text-sm font-medium">16:9 Landscape</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-3xl mb-10">
        <div className="p-6 border-b">
          <p
            className="text-slate-800 font-normal text-sm"
            dangerouslySetInnerHTML={{
              __html: showFullText ? text : truncateText(text, maxWords),
            }}
          />
        </div>
        <button
          className="flex gap-2 items-center justify-center w-full text-sm p-4 font-semibold text-indigo-600"
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? (
            <>
              Show Less <CaretUp size={20} />
            </>
          ) : (
            <>
              Show More <CaretDown size={20} />
            </>
          )}
        </button>
      </div>

      <div>
        <div className="flex items-center border-b mb-4">
          {tabs.map((data, index) => (
            <div
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index
                  ? " border-indigo-600"
                  : "border-transparent text-slate-500"
              } border-b-2 px-4 py-2 text-sm font-medium cursor-pointer`}
              key={index}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
        {activeTab === 0 ? (
          <div className="border rounded-2xl">
            <table className="w-full text-sm font-medium">
              <thead>
                <tr className="border-b">
                  <td className="px-4 py-2">Name</td>
                  <td className="py-2">Size</td>
                  <td className="py-2"></td>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((data, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="px-4 py-3 flex items-center gap-3">
                      <img width={18} src={pdf} alt="" />
                      document010.pdf
                    </td>
                    <td className="border-t ">500 kb</td>
                    <td className="px-4 py-3 text-end">
                      <button>
                        <DownloadSimple size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="border rounded-2xl">
            <table className="w-full text-sm font-medium">
              <thead>
                <tr className="border-b ">
                  <td className="px-4 py-2">Name</td>
                  <td>Description</td>
                  <td className="px-4 py-2 ">Credits</td>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((data, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="px-4 py-2 flex items-center gap-3">
                      <img width={18} src={pdf} alt="" /> Subtitles and SRT
                      Files
                    </td>
                    <td>
                      Spoken English videos only. Allow up to 24-48 hours.
                    </td>
                    <td className="px-4 py-2">0.5 credits</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectBrief;
