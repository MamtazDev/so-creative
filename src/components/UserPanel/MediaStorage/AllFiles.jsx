import { useState } from "react";
import FolderCard from "./FolderCard";
import VideoCard from "./VideoCard";
import { mediaStorage } from "../../../utils/data";

const AllFiles = () => {
  const folders = mediaStorage.filter((item) => item.folder);
  const videos = mediaStorage.filter((item) => item.video);
  const combinedItems = folders.concat(videos);

  return (
    <div className="grid grid-cols-5 gap-6">
      {combinedItems.length > 0 ? (
        combinedItems.map((item, index) => (
          <div key={index} className="border p-10 rounded-xl">
            {item.folder && <FolderCard folder={item.folder} />}
            {item.video && <VideoCard video={item.video} />}
          </div>
        ))
      ) : (
        <p>There is no data</p>
      )}
    </div>
  );
};

export default AllFiles;
