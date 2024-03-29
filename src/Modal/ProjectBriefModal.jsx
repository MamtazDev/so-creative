import React, { useRef, useState } from "react";
import BriefHeader from "../components/EditorPanel/EditorDashboard/ProjectModal/BriefHeader";
import ProjectTab from "../components/EditorPanel/EditorDashboard/ProjectModal/ProjectTab";
import VideoFiles from "../components/EditorPanel/EditorDashboard/ProjectModal/VideoFiles";
import ProjectBrief from "../components/EditorPanel/EditorDashboard/ProjectModal/ProjectBrief";
import BrandKit from "../components/EditorPanel/EditorDashboard/ProjectModal/BrandKit";
import useOutsideClick from "../hooks/useOutsideClick";
import VideoComments from "../components/UserPanel/AllVideos/VideoDetails/VideoComments";
import SubmitVideo from "../components/EditorPanel/EditorDashboard/ProjectModal/SubmitVideo";

const ProjectBriefModal = ({
  jobAction,
  handlePopup,
  handeJobAction,
  setModalPopup,
  setSelectedProject,
  selectedProject,
}) => {
  const [step, setStep] = useState("Video Files");

  console.log(selectedProject, "selectedProject");
  const bodyRef = useRef();
  useOutsideClick(bodyRef, () => {
    setModalPopup(false);
    setSelectedProject(null);
  });
  return (
    <div className="fixed left-0 top-0 z-[9999] h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      <div
        ref={bodyRef}
        className="max-w-[896px] max-h-[90vh]   w-full bg-white text-black rounded-2xl relative"
      >
        <BriefHeader
          jobAction={jobAction}
          handlePopup={handlePopup}
          handeJobAction={handeJobAction}
        />
        <div className="p-10 overflow-y-auto max-h-[70vh] no_scrollbar">
          <ProjectTab jobAction={jobAction} step={step} setStep={setStep} />
          {step === "Submit Video" && <SubmitVideo />}
          {step === "Video Files" && (
            <VideoFiles projectDetails={selectedProject} />
          )}
          {step === "Project Brief" && <ProjectBrief />}
          {step === "Brand Kit" && <BrandKit />}
          {step === "Ask Questions" && <VideoComments />}
        </div>
        <div className="absolute bg-white w-full -bottom-10 rounded-b-2xl  border-t flex items-center justify-between py-6 px-10 ">
          <p className="text-base font-normal">
            Total Project Cost: <span className="font-bold"> 2.5 Credit</span>
          </p>
          <p className="text-indigo-600 text-sm font-semibold">
            Request Credit Change
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectBriefModal;
