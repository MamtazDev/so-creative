import { DotsThreeOutline } from "@phosphor-icons/react";
import mp4 from "../../../assets/mp4.svg";
import { formatFileSize, truncateFilename } from "../../../utils/converter";

const VideoCard = ({ video }) => {
  console.log(video, "gg");
  return (
    <div className="text-center relative">
      <button className="absolute -top-6 -right-6">
        <DotsThreeOutline className="text-slate-500" size={20} weight="fill" />
      </button>
      <img className="m-auto mb-2" src={mp4} alt="" />
      <p className="text-base font-bold mb-2">
        {truncateFilename(video.title)}
      </p>
      <p className="text-slate-400 text-xs">{formatFileSize(video.fileSize)}</p>
    </div>
  );
};

export default VideoCard;
