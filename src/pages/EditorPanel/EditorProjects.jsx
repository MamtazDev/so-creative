import React, { useState } from "react";
import { useGetAllProjectsQuery } from "../../features/project/projectApi";
import Loading from "../../Shared/Loading";
import EditroSectionTitle from "../../components/EditorPanel/EditorSectionTitle/EditroSectionTitle";
import MyWorkTable from "../../components/EditorPanel/EditorDashboard/MyWorkTable";
import { useSelector } from "react-redux";

const EditorProjects = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAllProjectsQuery(`editor=${user?._id}`);

  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  console.log( "data for all editors: ", data );

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <EditroSectionTitle
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <MyWorkTable filteredData={data} />
    </>
  );
};

export default EditorProjects;
