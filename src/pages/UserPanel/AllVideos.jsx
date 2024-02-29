import { useState } from "react";
import AllVideo from "../../components/UserPanel/AllVideos/AllVideo";
import AllVideoHeader from "../../components/UserPanel/AllVideos/AllVideoHeader";
import { videos } from "../../Data/AllDatas";

const AllVideos = () => {
  const [filteredVideos, setFilteredVideos] = useState(videos);

  const handleFilterChange = (filter) => {
    if (filter === "Videos") {
      setFilteredVideos(videos);
    } else if (filter === "Drafts") {
      setFilteredVideos(videos.filter((video) => video.status === "Draft"));
    }
  };
  return (
    <div>
      <AllVideoHeader handleFilterChange={handleFilterChange} />
      <AllVideo filteredVideos={filteredVideos} />
    </div>
  );
};

export default AllVideos;
