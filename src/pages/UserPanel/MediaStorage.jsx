import { useState } from "react";
import AllFiles from "../../components/UserPanel/MediaStorage/AllFiles";
import MediaHeader from "../../components/UserPanel/MediaStorage/MediaHeader";
import MediaTable from "../../components/UserPanel/MediaStorage/MediaTable";

const MediaStorage = () => {
  const [selectedComponent, setSelectedComponent] = useState("folder");
  const handleComponentChange = (filter) => {
    setSelectedComponent(filter);
  };
  return (
    <div>
      <MediaHeader
        selectedComponent={selectedComponent}
        handleComponentChange={handleComponentChange}
      />
      {selectedComponent === "folder" ? <AllFiles /> : <MediaTable />}
    </div>
  );
};

export default MediaStorage;
