import { useState } from "react";
import { mediaStorage } from "../../../Data/AllDatas";
import FolderCard from "./FolderCard";
import VideoCard from "./VideoCard";

const AllFiles = () => {
  const folders = mediaStorage.filter((item) => item.folder);
  const videos = mediaStorage.filter((item) => item.video);
  const combinedItems = folders.concat(videos);

  return (
    <div className="grid grid-cols-5 gap-6">
      {combinedItems.map((item, index) => (
        <div key={index} className="border p-10 rounded-xl">
          {item.folder && <FolderCard folder={item.folder} />}
          {item.video && <VideoCard video={item.video} />}
        </div>
      ))}
    </div>
  );
};

export default AllFiles;
