import sun from "../../../assets/sun.png";
import GetStarted from "./GetStarted";
import RecentVideos from "./RecentVideos";

const Home = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <img src={sun} alt="" />
        <p className=" text-2xl font-bold">Good Morning, James!</p>
      </div>
      <RecentVideos />
      <GetStarted />
    </div>
  );
};

export default Home;
