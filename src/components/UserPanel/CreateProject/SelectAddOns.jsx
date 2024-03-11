import React from "react";
import { addOns } from "../../../utils/data";

const SelectAddOns = ({ setStep }) => {
  return (
    <div className="max-w-[768px] m-auto">
      <div className="flex flex-col gap-4 mb-4">
        {addOns.map((data, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl flex items-center gap-2 justify-between"
          >
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-indigo-600 w-5 h-5" />
              <img src={data.pic} alt="" />
              <div>
                <p className="text-slate-800 mb-1 text-base font-semibold">
                  {data.title}
                </p>
                <p className="text-slate-500 font-normal text-xs">
                  {data.subtitle}
                </p>
              </div>
            </div>
            <p className="text-base font-semibold">
              {data.credit} {data.credit > 1 ? "Credits" : "Credit"}
            </p>
          </div>
        ))}
      </div>
      <p className="text-xs font-medium text-slate-600 mb-16">
        All add-ons are subject to change once reviewed by our editing team.
        Additional credit charges may apply.
      </p>
      <div className="flex items-center gap-2 justify-between">
        <p className="text-base font-normal">
          Total Project Cost: <span className="font-bold">2.5 Credits</span>{" "}
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setStep(1)}
            className=" px-6 py-3 text-base font-semibold text-indigo-600 border rounded-full border-indigo-600"
          >
            Previous Step
          </button>
          <button onClick={() => setStep(3)} className="primary_btn">
            Create New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAddOns;
