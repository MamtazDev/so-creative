import { Link } from "react-router-dom";
import VideoCard from "../../../Shared/UserPanel/VideoCard";
import arrow from "../../../assets/arrow-right.svg";
import { videos } from "../../../Data/AllDatas";

const RecentVideos = () => {
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 justify-between mb-6">
        <p className=" text-xl font-bold ">Recent Videos</p>
        <Link
          to="/user/all-videos"
          className="text-indigo-600 text-base font-semibold flex items-center gap-1"
        >
          All Videos
          <img src={arrow} alt="" />
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {videos.slice(0, 5).map((data, index) => (
          <VideoCard key={index} name={data.name} status={data.status} />
        ))}
      </div>
    </div>
  );
};

export default RecentVideos;
