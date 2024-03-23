import {
  CalendarBlank,
  CaretDown,
  DotsThreeOutline,
  Plus,
  TextAa,
} from "@phosphor-icons/react";
import arrow from "../../../assets/down-arrow.svg";
import brand from "../../../assets/socreative-brand.svg";
import { useState } from "react";

const AllBrands = ({ setStep }) => {
  const [showSort, setShowSort] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-3 justify-between mb-6">
        <p className="text-xl font-bold">All Brand Kits</p>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div
              onClick={() => setShowSort(!showSort)}
              className="bg-slate-100 border rounded-full p-1"
            >
              <button className="bg-white rounded-full p-1.5 text-xs font-medium flex items-center gap-1">
                Sort by: Last Modified <CaretDown size={12} weight="fill" />
              </button>
            </div>
            {showSort && (
              <div className="bg-white w-auto shadow-xl rounded-xl absolute">
                <button className="text-sm font-medium flex items-center gap-3 px-4 py-2 border-b">
                  <CalendarBlank size={16} /> Last Modified
                </button>
                <button className="text-sm font-medium flex items-center gap-3 px-4 py-2 border-b">
                  <TextAa size={16} /> Alphabetical
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setStep(1)}
            className="primary_btn py-2 px-3 flex items-center gap-1"
          >
            <Plus size={20} /> Add New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="border rounded-3xl p-8 flex items-center gap-8 relative">
          <button className="absolute top-8 right-8">
            <DotsThreeOutline size={24} weight="fill" />
          </button>
          <img src={brand} alt="" />
          <div>
            <p className="text-xl font-bold mb-3">SoCreative</p>
            <p className="text-sm text-slate-500 font-normal">
              We are platform looking forward to build a collaborative video
              creation platform for business that will help them to grow on
              their social media to generate healthy revenues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBrands;
