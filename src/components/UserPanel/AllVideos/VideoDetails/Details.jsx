import { DownloadSimple } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";
import VimeoPlayer from "react-player/vimeo";
import useOutsideClick from "../../../../hooks/useOutsideClick";

const Details = () => {
  const downloadRef = useRef();
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  useOutsideClick(downloadRef, () => setShowDownloadOptions(false));
  return (
    <div>
      <VimeoPlayer
        className="bg-gray-400 rounded-xl"
        url="https://vimeo.com/626780181"
        width="100%"
        height="570"
        controls={true}
      />
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
          <div
            ref={downloadRef}
            className="max-w-[477px]  bg-white w-full shadow-2xl rounded-2xl ml-auto"
          >
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
