import React from "react";
import { videos } from "../../../utils/data";
import { truncateFilename } from "../../../utils/converter";

const InProgressVideo = ({ data }) => {
  const inProgressVideos = videos.filter(
    (data) => data.status === "In Progress"
  );

  return (
    <div className="grid grid-cols-4 gap-6 mb-10">
      {data?.length > 0 ? (
        data.slice(0, 3).map((d, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 flex gap-4 items-center"
          >
            <div className="relative">
              <iframe
                className="rounded-xl "
                width="151"
                height="84"
                src="https://www.youtube.com/embed/Z76aWfCc7_k?si=GW52k_zAdVfPOw66"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <button className="absolute top-1 right-1 bg-orange-500 text-[10.5px] text-white py-[1.75px] px-[5.25px] rounded-md ">
                {data.status}
              </button>
            </div>
            <div>
              <p className="text-base font-bold mb-2">
                {truncateFilename(d.title)}
              </p>
              <p className="text-xs font-normal mb-1">
                Remaining Delivery Time
              </p>
              <p className="text-sm font-semibold">16h: 52m: 36s</p>
            </div>
          </div>
        ))
      ) : (
        <p>There is no data</p>
      )}
    </div>
  );
};

export default InProgressVideo;
