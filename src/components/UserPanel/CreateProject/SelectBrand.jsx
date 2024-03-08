import { Plus } from "@phosphor-icons/react";

const SelectBrand = () => {
  return (
    <div className="border rounded-xl p-6 ">
      <p className="text-lg font-semibold mb-6">Select Brand Kit</p>
      <div className="flex items-center gap-6 mb-6">
        <div className="border border-dashed rounded-xl w-[120px] h-[120px] flex flex-col items-center justify-center">
          <Plus className="text-indigo-600 mb-2" size={24} />
          <p className="text-slate-500 text-xs font-semibold">Add New</p>
        </div>
      </div>
      <button className="py-3 px-6 bg-indigo-600 rounded-full text-white text-base font-semibold ">
        Continue
      </button>
    </div>
  );
};

export default SelectBrand;
