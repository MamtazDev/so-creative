import { useState } from "react";
import AllFiles from "../../components/UserPanel/MediaStorage/AllFiles";
import MediaHeader from "../../components/UserPanel/MediaStorage/MediaHeader";
import MediaTable from "../../components/UserPanel/MediaStorage/MediaTable";
import useLoading from "../../hooks/useLoading";
import Loading from "../../Shared/Loading";

const MediaStorage = () => {
  const [selectedComponent, setSelectedComponent] = useState("folder");
  const { isLoading } = useLoading();
  const handleComponentChange = (filter) => {
    setSelectedComponent(filter);
  };
  return (
    <div className="h-full">
      <MediaHeader
        selectedComponent={selectedComponent}
        handleComponentChange={handleComponentChange}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>{selectedComponent === "folder" ? <AllFiles /> : <MediaTable />}</>
      )}
    </div>
  );
};

export default MediaStorage;
