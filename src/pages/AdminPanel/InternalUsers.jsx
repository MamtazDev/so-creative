import { useState } from "react";
import InternalSectionTitle from "../../components/InternalUsers/InternalSectionTitle";
import InternalTable from "../../components/InternalUsers/InternalTable";
import { internalUserData } from "../../utils/data";

const InternalUsers = () => {
  const [filter, setFilter] = useState("All");
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const filteredData = internalUserData.filter((item) => {
    switch (filter) {
      case "All":
        return true;
      case "Admin":
        return item.role === "Admin";
      case "Account Manager":
        return item.role === "Account Manager";
      case "Editor":
        return item.role === "Editor";
      default:
        return false;
    }
  });

  return (
    <>
      <InternalSectionTitle
        handleFilterChange={handleFilterChange}
        filter={filter}
      />
      <InternalTable filteredData={filteredData} />
    </>
  );
};

export default InternalUsers;
