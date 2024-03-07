import React from "react";
import FromLabel from "./FromLabel";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { aspectRatio } from "../../../utils/data";

const AspectRatio = () => {
  return (
    <div className="border rounded-xl p-6">
      <div className="flex gap-4 justify-between items-start mb-6">
        <FromLabel
          title="Aspect Ratio"
          subtitle="Select the main size for your video"
        />
        <div className="flex items-center gap-1 text-xs font-medium">
          <p className="text-slate-500">Need Help?</p>
          <Link className="text-indigo-600 flex items-center gap-1" to="#">
            See Guide <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {aspectRatio.length > 0 &&
          aspectRatio.map((data, index) => (
            <div
              className="border text-center rounded-xl p-2 w-[120px] h-[124px] text-sm font-semibold"
              key={index}
            >
              <div className="text-end">
                <input type="radio" />
              </div>
              <img className="m-auto" src={data.pic} alt="" />
              <p className="mt-2">{data.ratio}</p>
              <p>{data.name}</p>
            </div>
          ))}
        <div className="border text-center rounded-xl p-2 w-[120px] h-[124px] text-sm font-semibold">
          <div className="text-end">
            <input type="radio" />
          </div>

          <p className="mb-5">Custom</p>
          <input className="brief_input" type="text" placeholder="Type Here" />
        </div>
      </div>
      <button className="py-3 px-6 bg-indigo-600 rounded-full text-white text-base font-semibold ">
        Continue
      </button>
    </div>
  );
};

export default AspectRatio;
