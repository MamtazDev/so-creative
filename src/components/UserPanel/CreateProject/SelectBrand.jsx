import { Plus } from "@phosphor-icons/react";

const SelectBrand = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="border border-dashed rounded-xl w-[120px] h-[120px] flex flex-col items-center justify-center">
        <Plus className="text-indigo-600 mb-2" size={24} />
        <p className="text-slate-500 text-xs font-semibold">Add New</p>
      </div>
    </div>
  );
};

export default SelectBrand;
