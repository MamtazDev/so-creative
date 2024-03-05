import Loading from "../../Shared/Loading";
import sun from "../../assets/sun.svg";
import GetStarted from "../../components/UserPanel/Home/GetStarted";
import InProgressVideo from "../../components/UserPanel/Home/InProgressVideo";
import RecentVideos from "../../components/UserPanel/Home/RecentVideos";
import useLoading from "../../hooks/useLoading";

const UserHome = () => {
  const { isLoading } = useLoading();
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
          <InProgressVideo />
          <RecentVideos />
        </>
      )}

      <GetStarted />
    </div>
  );
};

export default UserHome;
