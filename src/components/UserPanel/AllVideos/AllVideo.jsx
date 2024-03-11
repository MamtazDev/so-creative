/* eslint-disable react/prop-types */
import VideoCard from "../../../Shared/UserPanel/VideoCard";
import { truncateFilename } from "../../../utils/converter";

const AllVideo = ({ filteredVideos }) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {filteredVideos.length > 0 ? (
        filteredVideos?.map((data, index) => (
          <VideoCard
            key={index}
            data={data}
            name={truncateFilename(data.title)}
            status={data.status}
          />
        ))
      ) : (
        <p>There is no data</p>
      )}
    </div>
  );
};

export default AllVideo;
