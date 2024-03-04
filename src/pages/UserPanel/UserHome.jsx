import sun from "../../assets/sun.svg";
import GetStarted from "../../components/UserPanel/Home/GetStarted";
import InProgressVideo from "../../components/UserPanel/Home/InProgressVideo";
import RecentVideos from "../../components/UserPanel/Home/RecentVideos";

const UserHome = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <img src={sun} alt="" />
        <p className=" text-2xl font-bold">Good Morning, James!</p>
      </div>
      <InProgressVideo />
      <RecentVideos />
      <GetStarted />
    </div>
  );
};

export default UserHome;
