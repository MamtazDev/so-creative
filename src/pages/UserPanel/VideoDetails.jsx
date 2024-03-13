import React, { useState } from "react";
import DetailsHeader from "../../components/UserPanel/AllVideos/VideoDetails/DetailsHeader";
import Details from "../../components/UserPanel/AllVideos/VideoDetails/Details";
import ExperienceModal from "../../Modal/ExperienceModal";
import VideoComments from "../../components/UserPanel/AllVideos/VideoDetails/VideoComments";

const VideoDetails = () => {
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  return (
    <div>
      <DetailsHeader setShowExperienceModal={setShowExperienceModal} />
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="col-span-2">
          <Details />
        </div>
        <VideoComments />
      </div>
      {showExperienceModal && (
        <ExperienceModal setShowExperienceModal={setShowExperienceModal} />
      )}
    </div>
  );
};

export default VideoDetails;
