import { useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import Draft from "./Draft";
import Details from "./Details";

const SelectDraft = ({ setShowDraftModal }) => {
  const draftRef = useRef();
  const [step, setStep] = useState(1);
  useOutsideClick(draftRef, () => setShowDraftModal(false));

  return (
    <div className="fixed left-0 top-0 z-[9999] h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      <div
        ref={draftRef}
        className="max-w-[896px] max-h-[90vh] overflow-y-auto no_scrollbar w-full bg-white text-black p-10 rounded-2xl relative"
      >
        {step === 1 && (
          <Draft setStep={setStep} setShowDraftModal={setShowDraftModal} />
        )}

        {step === 2 && (
          <Details
            setModalStep={setStep}
            setShowDraftModal={setShowDraftModal}
          />
        )}
      </div>
    </div>
  );
};

export default SelectDraft;
