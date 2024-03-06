import { useState } from "react";
import AllFiles from "../../components/UserPanel/MediaStorage/AllFiles";
import MediaHeader from "../../components/UserPanel/MediaStorage/MediaHeader";
import MediaTable from "../../components/UserPanel/MediaStorage/MediaTable";
import useLoading from "../../hooks/useLoading";
import Loading from "../../Shared/Loading";
import CreateFolderModal from "../../Modal/CreateFolderModal";
import { useGetUserDriveQuery } from "../../features/videos/videoApi";

const MediaStorage = () => {
  const [selectedComponent, setSelectedComponent] = useState("folder");

  const handleComponentChange = (filter) => {
    setSelectedComponent(filter);
  };
  const [openCreateFolderModal, setOpenCreateFolderModal] = useState(false);

  const { data, isLoading: getingDrive } = useGetUserDriveQuery();

  console.log(data, "dfsdf");

  return (
    <div className="h-full">
      <MediaHeader
        selectedComponent={selectedComponent}
        handleComponentChange={handleComponentChange}
        setOpenCreateFolderModal={setOpenCreateFolderModal}
      />
      {openCreateFolderModal && (
        <CreateFolderModal
          setOpenCreateFolderModal={setOpenCreateFolderModal}
        />
      )}
      {getingDrive ? (
        <Loading />
      ) : (
        <>
          {selectedComponent === "folder" ? (
            <AllFiles data={data} />
          ) : (
            <MediaTable />
          )}
        </>
      )}
    </div>
  );
};

export default MediaStorage;
