import React, { useState } from "react";
import DetailsHeader from "../../components/UserPanel/AllVideos/VideoDetails/DetailsHeader";
import Details from "../../components/UserPanel/AllVideos/VideoDetails/Details";
import ExperienceModal from "../../Modal/ExperienceModal";
import VideoComments from "../../components/UserPanel/AllVideos/VideoDetails/VideoComments";
import { useLoaderData, useParams } from "react-router-dom";
import { useGetProjectDetailsQuery } from "../../features/project/projectApi";

const VideoDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProjectDetailsQuery(id);

  console.log(data, "projectDetails");
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  return (
    <div>
      <DetailsHeader
        setShowExperienceModal={setShowExperienceModal}
        data={data}
      />
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="col-span-2">
          <Details data={data} />
        </div>
        <VideoComments data={data} />
      </div>
      {showExperienceModal && (
        <ExperienceModal setShowExperienceModal={setShowExperienceModal} />
      )}
    </div>
  );
};

export default VideoDetails;
