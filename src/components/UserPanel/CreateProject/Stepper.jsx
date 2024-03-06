import React from "react";
import { createProjectStepper } from "../../../utils/data";

const Stepper = () => {
  return (
    <div className="max-w-[750px] m-auto flex items-center gap-5 justify-center mb-10">
      {createProjectStepper.map((data, index) => (
        <div
          className="flex  items-center gap-2 w-full overflow-hidden"
          key={index}
        >
          <button className=" flex-shrink-0  w-7 h-7 rounded-full shadow-sm bg-slate-200 text-xs font-medium">
            {index + 1}
          </button>
          <p className=" flex-shrink-0  text-base font-semibold">{data}</p>
          {index !== 2 && (
            <div className=" flex-shrink-0  max-w-[126px] border-b w-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
