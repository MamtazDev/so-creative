import { BASE_API_URL } from "../../config/config";
import { timeAgo } from "../../utils/converter";
import { useRef, useState } from "react";
import VimeoPlayer from "react-player/vimeo";

/* eslint-disable react/prop-types */
const VideoCard = ({ status, name, data, time }) => {
  return (
    <div>
      <div className="relative  mr-6 ">
        {" "}
        <div className="overflow-hidden w-full rounded-xl max-h-[160px] h-full mb-4 relative group">
          <VimeoPlayer
            className="bg-gray-400 rounded-xl w-full"
            url={data?.file ? data?.file : "https://vimeo.com/626780181"}
            width="100%"
            height="100%"
            controls={true}
          />
          {/* <button
            className={`${
              status === "Draft" ? "bg-slate-800" : "bg-green-500"
            } text-white font-semibold text-sm px-[6px] rounded-md absolute top-2 right-2 z-50`}
          >
            {status}
          </button> */}
        </div>
      </div>
      <p className="text-base  font-semibold mb-1">{name}</p>
      <p className="text-slate-500 text-sm font-normal">{timeAgo(time)}</p>
    </div>
  );
};

export default VideoCard;
