import Loading from "../../Shared/Loading";
import sun from "../../assets/sun.svg";
import GetStarted from "../../components/UserPanel/Home/GetStarted";
import InProgressVideo from "../../components/UserPanel/Home/InProgressVideo";
import RecentVideos from "../../components/UserPanel/Home/RecentVideos";
import { useGetUserAllFilesQuery } from "../../features/videos/videoApi";

const UserHome = () => {
  const { data, isLoading } = useGetUserAllFilesQuery();
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <img src={sun} alt="" />
        <p className=" text-2xl font-bold">Good Morning, James!</p>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <InProgressVideo data={data} />
          <RecentVideos data={data} />
        </>
      )}

      <GetStarted />
    </div>
  );
};

export default UserHome;
