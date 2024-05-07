import React, { useState } from "react";
import Loading from "../../Shared/Loading";
import EditorPagination from "../../components/EditorPanel/EditorDashboard/EditorPagination";
import AllProjectFileLayout from "../../components/UserPanel/Projects/AllProjectFileLayout";
import AllProjects from "../../components/UserPanel/Projects/AllProjects";
import ProjectsHeader from "../../components/UserPanel/Projects/ProjectsHeader";
import { useGetUserProjectsQuery } from "../../features/project/projectApi";

const Projects = () => {
  const [selectedComponent, setSelectedComponent] = useState("folder");

  const { data, isLoading } = useGetUserProjectsQuery("");
  const handleComponentChange = (filter) => {
    setSelectedComponent(filter);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="h-full">
      <ProjectsHeader
        handleComponentChange={handleComponentChange}
        selectedComponent={selectedComponent}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {selectedComponent === "folder" ? (
            // <AllVideo filteredVideos={data} />
            <>
              <AllProjects
                data={data.slice(
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
            // <AllVideoFileLayout filteredVideos={filteredVideos} />
            <>
              <AllProjectFileLayout
                data={data.slice(
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

export default Projects;
