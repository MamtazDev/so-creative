import { DownloadSimple } from "@phosphor-icons/react";
import React, { useState } from "react";
import { timeAgo, truncateFilename } from "../../../../utils/converter";
import VideoCard from "../../../../Shared/UserPanel/VideoCard";

const Details = ({ data }) => {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const sortedVideos = data?.files.map((i) => i.fileData) || [];

  console.log(sortedVideos, "sortedVideos");
  return (
    <div>
      {data?.exportedUrl ? (
        <iframe
          className="rounded-xl mb-5"
          width="100%"
          height="570"
          src={data?.exportedUrl}
          title={data?.projectTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-full h-[570px] flex gap-5 flex-wrap">
          {sortedVideos?.length > 0 &&
            sortedVideos?.map((v, index) => (
              <VideoCard
                key={index}
                data={v}
                name={truncateFilename(v.title)}
                time={v.createdAt}
                status={v.status}
              />
            ))}
        </div>
      )}
      <div>
        <div className="flex items-center gap-4 justify-between">
          <div>
            <p className="text-2xl font-semibold mb-1">{data?.projectTitle}</p>
            <p className="text-slate-500 font-normal text-base">
              updated {timeAgo(data?.updatedAt)}
            </p>
          </div>
          {data?.exportedUrl && (
            <button
              onClick={() => setShowDownloadOptions(!showDownloadOptions)}
              className="flex items-center gap-2.5 bg-slate-900 text-white py-2.5 px-[30px] rounded-full text-sm font-semibold"
            >
              <DownloadSimple size={20} /> Download Video
            </button>
          )}
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
