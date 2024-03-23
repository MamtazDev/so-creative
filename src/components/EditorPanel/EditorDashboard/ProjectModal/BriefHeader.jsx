import React from "react";
import imgOne from "../../../../assets/editor_panel/profile_profile.svg";

const BriefHeader = ({ jobAction, handlePopup, handeJobAction }) => {
  return (
    <div className="modal_header border-b border-b-black/10 p-6 flex justify-between items-center">
      <div className="project_info flex gap-3">
        <div className="left">
          <img src={imgOne} alt="profile" />
        </div>
        <div className="right">
          <h2 className="text-slate-900 text-lg font-semibold flex gap-3 items-center">
            Sales Strategies Video Series
            {jobAction === true ? (
              <span className="bg-orange-500 rounded-md text-white py-[2px] px-[6px] text-xs font-semibold">
                In Progress
              </span>
            ) : (
              <span className="bg-red-500 rounded-md text-white py-[2px] px-[6px] text-xs font-semibold">
                New Project
              </span>
            )}
          </h2>
          <p className="text-slate-600 text-sm font-normal">
            Created September 1, 2023
          </p>
        </div>
      </div>
      <div className="project_action flex gap-3">
        {jobAction === false ? (
          <>
            <button
              onClick={handlePopup}
              className="text-base font-semibold text-red-600 border border-red-600 py-3 px-6 rounded-full"
            >
              Decline Job
            </button>
            <button
              onClick={handeJobAction}
              className="text-base font-semibold text-white bg-indigo-600 border border-indigo-600 py-3 px-6 rounded-full"
            >
              Accept Job
            </button>
          </>
        ) : (
          <button className="text-base font-semibold text-white bg-indigo-600 border border-indigo-600 py-3 px-6 rounded-full">
            Share Project
          </button>
        )}
      </div>
    </div>
  );
};

export default BriefHeader;
