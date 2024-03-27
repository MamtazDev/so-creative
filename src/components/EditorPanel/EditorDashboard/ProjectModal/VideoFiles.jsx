import React, { useRef, useState } from "react";
import Details from "../../../UserPanel/AllVideos/VideoDetails/Details";
import check from "../../../../assets/check-icon.svg";
import VimeoPlayer from "react-player/vimeo";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import { DownloadSimple } from "@phosphor-icons/react";

const VideoFiles = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const downloadRef = useRef();
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  useOutsideClick(downloadRef, () => setShowDownloadOptions(false));

  return (
    <div>
      <div className="grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <div>
            <div className="h-[327px] mb-5">
              <VimeoPlayer
                className="bg-gray-400 rounded-xl mb-6 "
                url="https://vimeo.com/626780181"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <div>
              <div className="flex items-center gap-4 justify-between">
                <div>
                  <p className="text-base font-semibold mb-1">
                    Mindfulness Meditation Guides
                  </p>
                  <p className="text-slate-500 font-normal text-xs">
                    updated 1 day ago
                  </p>
                </div>
                <button
                  onClick={() => setShowDownloadOptions(!showDownloadOptions)}
                  className="flex items-center gap-2.5 bg-slate-900 text-white py-2 px-6 rounded-full text-sm font-semibold"
                >
                  <DownloadSimple size={20} /> Download
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
        </div>
        <div className="h-full overflow-y-auto">
          <div className="flex flex-col items-center gap-6">
            {[1, 2, 3, 4].map((data, index) => (
              <div
                className={`${
                  selectedVideo === index
                    ? "border-2 border-[#C67CFF] p-1 rounded-xl"
                    : ""
                }  relative  w-[211px] h-[108px]  `}
                key={index}
              >
                <div
                  onClick={() => setSelectedVideo(index)}
                  className="absolute top-0 right-0 w-full h-full"
                ></div>

                <VimeoPlayer
                  className="bg-gray-400 rounded-xl"
                  url="https://vimeo.com/626780181"
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFiles;
