import { DownloadSimple } from "@phosphor-icons/react";
import React, { useState } from "react";

const Details = () => {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  return (
    <div>
      <iframe
        className="rounded-xl mb-5"
        width="100%"
        height="570"
        src="https://www.youtube.com/embed/Z76aWfCc7_k?si=GW52k_zAdVfPOw66"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <div className="flex items-center gap-4 justify-between">
          <div>
            <p className="text-2xl font-semibold mb-1">
              Mindfulness Meditation Guides
            </p>
            <p className="text-slate-500 font-normal text-base">
              updated 1 day ago
            </p>
          </div>
          <button
            onClick={() => setShowDownloadOptions(!showDownloadOptions)}
            className="flex items-center gap-2.5 bg-slate-900 text-white py-2.5 px-[30px] rounded-full text-sm font-semibold"
          >
            <DownloadSimple size={20} /> Download Video
          </button>
        </div>
        {showDownloadOptions && (
          <div className="max-w-[477px] w-full shadow-2xl rounded-2xl ml-auto">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div
                key={index}
                className="py-4 pr-3 pl-6 flex items-center gap-4 justify-between border-b"
              >
                <p className="text-base font-bold ">
                  2160p{" "}
                  <span className="text-xs font-medium text-slate-500">
                    (3840 &#xd7; 2160)
                  </span>
                </p>
                <button className="flex items-center gap-2.5 text-sm font-semibold">
                  <DownloadSimple className="text-indigo-600" size={20} />
                  Download 99.23MB
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
