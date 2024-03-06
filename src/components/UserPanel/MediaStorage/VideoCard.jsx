import { DotsThreeOutline, DownloadSimple, Trash } from "@phosphor-icons/react";
import mp4 from "../../../assets/mp4.svg";
import { formatFileSize, truncateFilename } from "../../../utils/converter";

const VideoCard = ({ video, setClickedItem, clickedItem }) => {
  const handleClick = (e, id) => {
    e.stopPropagation();
    if (clickedItem === id) {
      setClickedItem(null);
    } else {
      setClickedItem(id);
    }
  };
  return (
    <div className="text-center relative">
      <button
        className="absolute -top-6 -right-6"
        onClick={(e) => handleClick(e, video._id)}
      >
        <DotsThreeOutline className="text-slate-500" size={20} weight="fill" />
      </button>
      {clickedItem === video?._id && (
        <div className="absolute top-0 -right-6 bg-indigo-50 p-2 shadow rounded-sm flex flex-col items-center gap-2">
          <button>
            <Trash className="text-red-600" size={20} weight="fill" />
          </button>
          <button>
            <DownloadSimple
              className="text-indigo-600"
              size={20}
              weight="fill"
            />
          </button>
        </div>
      )}
      <img className="m-auto mb-2" src={mp4} alt="" />
      <p className="text-base font-bold mb-2">
        {truncateFilename(video.title)}
      </p>
      <p className="text-slate-400 text-xs">{formatFileSize(video.fileSize)}</p>
    </div>
  );
};

export default VideoCard;
