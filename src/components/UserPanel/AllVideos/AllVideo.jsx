/* eslint-disable react/prop-types */
import VideoCard from "../../../Shared/UserPanel/VideoCard";

const AllVideo = ({ filteredVideos }) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {filteredVideos.length > 0 ? (
        filteredVideos?.map((data, index) => (
          <VideoCard key={index} name={data.name} status={data.status} />
        ))
      ) : (
        <p>There is no data</p>
      )}
    </div>
  );
};

export default AllVideo;
