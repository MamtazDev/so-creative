import add from "../../assets/add.png";
import home from "../../assets/home.png";
import homeActive from "../../assets/home-active.png";
import video from "../../assets/video.png";
import videoActive from "../../assets/video-active.png";
import media from "../../assets/media.png";
import mediaActive from "../../assets/media-active.png";
import brand from "../../assets/brand.png";
import brandActive from "../../assets/brand-active.png";
import companyLogo from "../../assets/company-logo.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const menus = [
    {
      pic: home,
      activePic: homeActive,
      title: "Home",
      path: "/user",
    },
    {
      pic: video,
      activePic: videoActive,
      title: "All Videos",
      path: "/user/all-videos",
    },
    {
      pic: media,
      activePic: mediaActive,
      title: "Media Storage",
      path: "/user/media-storage",
    },
    {
      pic: brand,
      activePic: brandActive,
      title: "Brand Kit",
      path: "/user/brand-kit",
    },
  ];
  return (
    <div className="flex-shrink-0 sidebar h-full flex flex-col gap-4 justify-between w-64 pl-6 pr-2 pb-8">
      <div>
        <button className="bg-indigo-600 flex gap-2 items-center justify-center mb-8 text-base text-white font-semibold rounded-full w-full py-3 px-6 ">
          <img src={add} alt="" />
          New Project
        </button>

        <div className="flex flex-col gap-1">
          {menus.map((data, index) => (
            <Link
              to={data.path}
              className={`${
                location.pathname === data.path
                  ? "active bg-white text-indigo-600"
                  : ""
              } " rounded-full py-3 px-6 flex items-center gap-3 text-sm font-semibold"`}
              key={index}
            >
              {" "}
              <img
                src={
                  location.pathname === data.path ? data.activePic : data.pic
                }
                alt=""
              />
              {data.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-3 items-center ">
        <img src={companyLogo} alt="" />
        <div>
          <p className="text-base font-semibold">Company Name</p>
          <p className="text-xs font-normal">Free Plan</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
