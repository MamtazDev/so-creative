/* eslint-disable react/prop-types */
import VideoCard from "../../../Shared/UserPanel/VideoCard";

const AllVideo = ({ filteredVideos }) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {filteredVideos.map((data, index) => (
        <VideoCard key={index} name={data.name} status={data.status} />
      ))}
    </div>
  );
};

export default AllVideo;
