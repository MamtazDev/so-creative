import { Link } from "react-router-dom";
import VideoCard from "../../../Shared/UserPanel/VideoCard";
import arrow from "../../../assets/arrow-right.svg";

const RecentVideos = () => {
  const videos = [
    {
      name: "Product Showcase Video",
      status: "Exported",
    },
    {
      name: "Employee Onboarding Training",
      status: "Exported",
    },
    {
      name: "Sales Strategies Video Series",
      status: "Draft",
    },
    {
      name: "Advanced Training Module",
      status: "Exported",
    },
    {
      name: "Marketing Campaign Launch Video",
      status: "Draft",
    },
  ];
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
        {videos.map((data, index) => (
          <VideoCard key={index} name={data.name} status={data.status} />
        ))}
      </div>
    </div>
  );
};

export default RecentVideos;
