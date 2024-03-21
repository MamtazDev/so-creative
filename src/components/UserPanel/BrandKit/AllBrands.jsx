import { DotsThreeOutline, Plus } from "@phosphor-icons/react";
import arrow from "../../../assets/down-arrow.svg";
import brand from "../../../assets/socreative-brand.svg";

const AllBrands = ({ setStep }) => {
  return (
    <div>
      <div className="flex items-center gap-3 justify-between mb-6">
        <p className="text-xl font-bold">All Brand Kits</p>
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 border rounded-full p-1">
            <button className="bg-white rounded-full p-1.5 text-xs font-medium flex items-center gap-1">
              Sort by: Last Modified <img src={arrow} alt="" />
            </button>
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
