import { useState } from "react";
import Loading from "../../Shared/Loading";
import MyWorkTable from "../../components/EditorPanel/EditorDashboard/MyWorkTable";
import EditroSectionTitle from "../../components/EditorPanel/EditorSectionTitle/EditroSectionTitle";
import useLoading from "../../hooks/useLoading";
import { MyWorkTableData } from "../../utils/data";
import { useGetAllProjectsQuery } from "../../features/project/projectApi";

const EditorAllProjects = () => {
  const [filter, setFilter] = useState("All");
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const { data, isLoading } = useGetAllProjectsQuery("editor=none");

  console.log(data, "datatkjk");
  const repeatedData = Array.from({ length: 5 }, () => MyWorkTableData).flat();

  const filteredData = repeatedData.filter((item) =>
    filter === "All"
      ? true
      : filter === "Active"
      ? item.status === "In Progress" || item.status === "New Project"
      : filter === "Completed"
      ? item.status === "Approved"
      : true
  );
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <EditroSectionTitle
            filter={filter}
            handleFilterChange={handleFilterChange}
          />
          <div></div>

          <MyWorkTable filteredData={data} />
        </>
      )}
    </>
  );
};

export default EditorAllProjects;
