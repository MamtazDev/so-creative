import { useState } from "react";
import FolderCard from "./FolderCard";
import VideoCard from "./VideoCard";
import { mediaStorage } from "../../../utils/data";

const AllFiles = ({ data }) => {
  const folders = data.folders;
  const videos = data.files;
  const combinedItems = data.folders ? folders.concat(videos) : data;

  console.log(combinedItems, "fsfk");

  return (
    <div className="grid grid-cols-5 gap-6">
      {combinedItems.length > 0 ? (
        combinedItems.map((item, index) => (
          <div key={index} className="border p-10 rounded-xl">
            {item.folderData && <FolderCard folder={item.folderData} />}
            {item.fileData && <VideoCard video={item.fileData} />}
            {!item.fileData && !item.folderData && <VideoCard video={item} />}
          </div>
        ))
      ) : (
        <p>There is no data</p>
      )}
    </div>
  );
};

export default AllFiles;
