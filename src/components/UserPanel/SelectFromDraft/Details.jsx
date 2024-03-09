import React, { useState } from "react";
import {
  CaretDown,
  CaretLeft,
  CaretUp,
  FileText,
  PuzzlePiece,
} from "@phosphor-icons/react";
import cc from "../../../assets/cc.svg";
import voice from "../../../assets/voice.svg";

const Details = ({ setStep }) => {
  const [showFullText, setShowFullText] = useState(false);
  const maxWords = 110;
  const text =
    " This project aims to create a video series focusing on impactful sales strategies for businesses of all sizes. The series will leverage your on-demand video editing service to showcase its capabilities and attract potential clients, while providing valuable and actionable sales advice. <br /> <br /> To achieve your project goals, a multifaceted approach blending  content marketing, social media engagement, and strategic partnerships is essential. Crafting informative blog posts, videos, and social media content showcasing the benefits of your on-demand video editing service will help increase brand awareness and position your company as thought leaders in the sales and marketing realm. Implementing targeted advertising campaigns to reach potential clients and offering valuable resources such as eBooks or webinars on leveraging video editing for sales enhancement will generate leads and conversions. Collaborating with industry influencers and participating in relevant events or webinars will further solidify your company's reputation and expand your reach within the sales and marketing community.";

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };
  return (
    <div>
      <div className="flex items-start gap-4 justify-between mb-10">
        <div>
          <div className="flex gap-3 items-center">
            <p className="text-lg font-semibold">
              Sales Strategies Video Series
            </p>
            <button className="px-1.5 py-0.5 bg-slate-900 text-white rounded-md">
              Draft
            </button>
          </div>
          <p className="text-slate-600 text-sm font-normal">
            Created September 1, 2023
          </p>
        </div>
        <button
          onClick={() => setStep(1)}
          className="flex items-center gap-2 px-6 py-3 text-base font-semibold text-indigo-600 border rounded-full border-indigo-600"
        >
          <CaretLeft size={24} /> Go Back
        </button>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FileText className="text-indigo-600 " size={24} />
          <p className="text-lg font-semibold">Project Brief</p>
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
        <div className="flex items-center gap-2 mb-4">
          <PuzzlePiece className="text-indigo-600 " size={24} />
          <p className="text-lg font-semibold">Add-Ons</p>
        </div>

        <div className="border rounded-3xl mb-10">
          <div className="p-4 border-b flex items-center gap-2 justify-between">
            <div className="flex items-center gap-4">
              <img src={cc} alt="" />
              <div>
                <p className="text-slate-800 mb-1 text-base font-semibold">
                  Subtitles and SRT Files
                </p>
                <p className="text-slate-500 font-normal text-xs">
                  Spoken English videos only. Allow up to 24-48 hours.
                </p>
              </div>
            </div>
            <p className="text-base font-semibold">0.5 credits</p>
          </div>
          <div className="p-4 border-b flex items-center gap-2 justify-between">
            <div className="flex items-center gap-4">
              <img src={voice} alt="" />
              <div>
                <p className="text-slate-800 mb-1 text-base font-semibold">
                  Voice Over Artist
                </p>
                <p className="text-slate-500 font-normal text-xs">
                  Professional voice. Allow up to 48 hours.
                </p>
              </div>
            </div>
            <p className="text-base font-semibold">1 credit</p>
          </div>
          <div className="py-4 px-6  flex items-center gap-2 justify-between">
            <p className="text-base font-normal">
              Total Project Cost: <span className="font-bold">2.5 Credits</span>{" "}
            </p>
            <button className="text-indigo-600 text-sm font-semibold">
              Request Credit Change
            </button>
          </div>
        </div>
      </div>
      <button className="primary_btn w-full">Select Draft</button>
    </div>
  );
};

export default Details;