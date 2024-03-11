import React, { useState } from "react";
import WorkspaceSidebar from "../components/UserPanel/TeamSettings/WorkspaceSidebar";
import TeamSettings from "../components/UserPanel/TeamSettings/TeamSettings";

const TeamSettingModal = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="fixed left-0 top-0 z-[9999] h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      <div className="max-w-[768px] h-[85vh] overflow-y-auto no_scrollbar w-full bg-white text-black  rounded-2xl relative">
        <div className="flex h-full">
          <div className="p-6 border-r h-full flex-shrink-0">
            <WorkspaceSidebar setStep={setStep} step={step} />
          </div>
          <div className="p-6 w-full">
            {step === 0 && <TeamSettings />}
            {step === 1 && <div>conpany2</div>}
            {step === 2 && <div>conpany3</div>}
            {step === 3 && <div>conpany4</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSettingModal;
