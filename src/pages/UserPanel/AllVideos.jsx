import { useState } from "react";
import AllVideo from "../../components/UserPanel/AllVideos/AllVideo";
import AllVideoHeader from "../../components/UserPanel/AllVideos/AllVideoHeader";
import AllVideoFileLayout from "../../components/UserPanel/AllVideos/AllVideoFileLayout";
import { videos } from "../../utils/data";

const AllVideos = () => {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedComponent, setSelectedComponent] = useState("folder");

  const handleFilterChange = (filter) => {
    if (filter === "Videos") {
      setFilteredVideos(videos);
    } else if (filter === "Drafts") {
      setFilteredVideos(videos.filter((video) => video.status === "Draft"));
    }
  };

  const handleComponentChange = (filter) => {
    setSelectedComponent(filter);
  };
  return (
    <div>
      <AllVideoHeader
        handleFilterChange={handleFilterChange}
        handleComponentChange={handleComponentChange}
        selectedComponent={selectedComponent}
      />
      {selectedComponent === "folder" ? (
        <AllVideo filteredVideos={filteredVideos} />
      ) : (
        <AllVideoFileLayout filteredVideos={filteredVideos} />
      )}
    </div>
  );
};

export default AllVideos;
