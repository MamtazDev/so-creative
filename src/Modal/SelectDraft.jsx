import React, { useRef } from "react";
import close from "../assets/close.svg";
import useOutsideClick from "../hooks/useOutsideClick";
import { MagnifyingGlass } from "@phosphor-icons/react";

const SelectDraft = ({ setShowDraftModal }) => {
  const draftRef = useRef();
  useOutsideClick(draftRef, () => setShowDraftModal(false));
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      <div className="max-w-[896px] max-h-[90vh] overflow-y-auto no_scrollbar w-full bg-white text-black p-10 rounded-2xl relative">
        <div className="flex items-center gap-4 justify-between mb-6">
          <p className="text-xl font-bold">Select From Draft</p>

          <button onClick={() => setShowDraftModal(false)}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className="flex items-center gap-5 rounded-full bg-slate-100 p-3 w-full mb-10">
          <MagnifyingGlass size={16} />
          <input
            className="w-full bg-transparent"
            type="search"
            placeholder="Search projects"
          />
        </div>

        <button className="primary_btn w-full">Continue</button>
      </div>
    </div>
  );
};

export default SelectDraft;
