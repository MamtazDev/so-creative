import React from "react";
import DetailsHeader from "../../components/UserPanel/AllVideos/VideoDetails/DetailsHeader";
import Details from "../../components/UserPanel/AllVideos/VideoDetails/Details";

const VideoDetails = () => {
  return (
    <div>
      <DetailsHeader />
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="col-span-2">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
