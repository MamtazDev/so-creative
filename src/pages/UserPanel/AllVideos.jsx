import { useState } from "react";
import AllVideo from "../../components/UserPanel/AllVideos/AllVideo";
import AllVideoHeader from "../../components/UserPanel/AllVideos/AllVideoHeader";
import AllVideoFileLayout from "../../components/UserPanel/AllVideos/AllVideoFileLayout";
import { videos } from "../../utils/data";
import useLoading from "../../hooks/useLoading";
import Loading from "../../Shared/Loading";
import { useGetUserAllFilesQuery } from "../../features/videos/videoApi";

const AllVideos = () => {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedComponent, setSelectedComponent] = useState("folder");
  // const { isLoading } = useLoading();

  const { data, isLoading } = useGetUserAllFilesQuery();
  console.log(data, "data");
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
    <div className="h-full">
      <AllVideoHeader
        handleFilterChange={handleFilterChange}
        handleComponentChange={handleComponentChange}
        selectedComponent={selectedComponent}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {selectedComponent === "folder" ? (
            <AllVideo filteredVideos={data} />
          ) : (
            <AllVideoFileLayout filteredVideos={data} />
          )}
        </>
      )}
    </div>
  );
};

export default AllVideos;
