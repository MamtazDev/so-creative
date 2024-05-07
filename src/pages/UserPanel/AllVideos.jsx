import { useState } from "react";
import Loading from "../../Shared/Loading";
import EditorPagination from "../../components/EditorPanel/EditorDashboard/EditorPagination";
import AllVideo from "../../components/UserPanel/AllVideos/AllVideo";
import AllVideoFileLayout from "../../components/UserPanel/AllVideos/AllVideoFileLayout";
import AllVideoHeader from "../../components/UserPanel/AllVideos/AllVideoHeader";
import { useGetUserAllFilesQuery } from "../../features/videos/videoApi";

const AllVideos = () => {
  const [sortBy, setSortBy] = useState("Last Modified");
  const [selectedComponent, setSelectedComponent] = useState("folder");

  const { data, isLoading } = useGetUserAllFilesQuery();

  const handleSort = (a, b) => {
    if (sortBy === "Alphabetical") {
      return a.title.localeCompare(b.title);
    } else {
      return b?.createdAt - a?.createdAt;
    }
  };

  const sortedData = data && data.length > 0 ? [...data].sort(handleSort) : [];

  const handleComponentChange = (filter) => {
    setSelectedComponent(filter);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="h-full">
      <AllVideoHeader
        sortBy={sortBy}
        setSortBy={setSortBy}
        handleComponentChange={handleComponentChange}
        selectedComponent={selectedComponent}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {selectedComponent === "folder" ? (
            <>
              <AllVideo
                filteredVideos={sortedData.slice(
                  (currentPage - 1) * itemsPerPage,
                  itemsPerPage * currentPage
                )}
              />
              <div className="pb-7">
                <EditorPagination
                  handlePageChange={(pageNumber) => setCurrentPage(pageNumber)}
                  currentPage={currentPage}
                  filteredData={data}
                  itemsPerPage={itemsPerPage}
                  endIndex={endIndex}
                />
              </div>
            </>
          ) : (
            <>
              <AllVideoFileLayout
                filteredVideos={sortedData.slice(
                  (currentPage - 1) * itemsPerPage,
                  itemsPerPage * currentPage
                )}
              />
              <div className="pb-7">
                <EditorPagination
                  handlePageChange={(pageNumber) => setCurrentPage(pageNumber)}
                  currentPage={currentPage}
                  filteredData={data}
                  itemsPerPage={itemsPerPage}
                  endIndex={endIndex}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AllVideos;
