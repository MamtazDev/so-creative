import React from "react";
import { useGetAllProjectsQuery } from "../../features/project/projectApi";
import Loading from "../../Shared/Loading";
import EditroSectionTitle from "../../components/EditorPanel/EditorSectionTitle/EditroSectionTitle";
import MyWorkTable from "../../components/EditorPanel/EditorDashboard/MyWorkTable";

const EditorProjects = () => {
  const { data, isLoading } = useGetAllProjectsQuery();
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {/* <EditroSectionTitle
        filter={filter}
        handleFilterChange={handleFilterChange}
      /> */}
      <div>fdf</div>
      {/* <MyWorkTable filteredData={filteredData} repeatedData={repeatedData} /> */}
    </>
  );
};

export default EditorProjects;
