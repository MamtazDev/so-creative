import { useRef, useState } from "react";
import Stepper from "../components/UserPanel/CreateProject/Stepper";
import useOutsideClick from "../hooks/useOutsideClick";
import close from "../assets/close.svg";
import UploadFile from "../components/UserPanel/CreateProject/UploadFile";
import StockVideos from "../components/UserPanel/CreateProject/StockVideos";
import AllAvater from "../components/UserPanel/CreateProject/AllAvater";
import CreateBrief from "../components/UserPanel/CreateProject/CreateBrief";

const CreateProjectModal = ({ setShowCreateModal }) => {
  const createRef = useRef();
  useOutsideClick(createRef, () => setShowCreateModal(false));
  const [step, setStep] = useState(0);
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      <div
        ref={createRef}
        className="max-w-[1280px] max-h-[90vh] overflow-y-auto no_scrollbar w-full bg-white text-black p-10 rounded-2xl relative"
      >
        <button
          onClick={() => setShowCreateModal(false)}
          className="absolute top-5 right-5 "
        >
          <img src={close} alt="" />
        </button>

        <Stepper step={step} />
        {step === 0 && (
          <div className="">
            <UploadFile />
            <StockVideos />
            <AllAvater />
            <div className="mt-10 text-center">
              <button onClick={() => setStep(1)} className=" primary_btn">
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
      </div>
    </div>
  );
};

export default CreateProjectModal;
