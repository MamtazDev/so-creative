import { useRef, useState } from "react";
import Stepper from "../components/UserPanel/CreateProject/Stepper";
import close from "../assets/close.svg";
import UploadFile from "../components/UserPanel/CreateProject/UploadFile";
import StockVideos from "../components/UserPanel/CreateProject/StockVideos";
import AllAvater from "../components/UserPanel/CreateProject/AllAvater";
import CreateBrief from "../components/UserPanel/CreateProject/CreateBrief";
import SelectAddOns from "../components/UserPanel/CreateProject/SelectAddOns";
import CreatingProject from "../components/UserPanel/CreateProject/CreatingProject";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveBrif,
  setProjectId,
  setShowCreateModal,
  setStep,
} from "../features/project/projectSlice";
import CreatingBrand from "../Shared/UserPanel/CreatingBrand";
const CreateProjectModal = () => {
  const createRef = useRef();

  const { projectId, step, projectCrating } = useSelector(
    (state) => state.project
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setProjectId(undefined));
    dispatch(setStep(0));
    dispatch(setActiveBrif(undefined));
    dispatch(setShowCreateModal(false));
  };

  return (
    <div className="fixed left-0 top-0 z-[9999] h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      {projectCrating ? (
        <div className="min-h-[90vh] h-full flex flex-col items-center justify-center bg-white w-full">
          {" "}
          <CreatingBrand title="Creating new project..." />
        </div>
      ) : (
        <div
          ref={createRef}
          className="max-w-[1280px] max-h-[90vh] overflow-y-auto no_scrollbar w-full bg-white text-black p-10 rounded-2xl relative"
        >
          <button onClick={handleClick} className="absolute top-5 right-5 ">
            <img src={close} alt="" />
          </button>
          {step !== 3 && <Stepper step={step} />}
          {step === 0 && (
            <div className="">
              <UploadFile />
              <StockVideos />
              <AllAvater />
              <div className="mt-10 text-center">
                <button
                  disabled={!projectId}
                  onClick={() => dispatch(setStep(1))}
                  className=" primary_btn disabled:bg-indigo-300"
                >
                  Save & Continue
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <>
              <CreateBrief />
            </>
          )}
          {step === 2 && (
            <>
              <SelectAddOns />
            </>
          )}
          {step === 3 && (
            <>
              <CreatingProject />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CreateProjectModal;
