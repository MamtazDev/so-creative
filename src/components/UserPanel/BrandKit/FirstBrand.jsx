import { Plus } from "@phosphor-icons/react";

const FirstBrand = ({ setStep }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="text-xl font-bold mb-2">Create Your First Brand</p>
      <p className="text-slate-500 text-sm font-normal mb-6">
        This information allows you to create videos faster <br /> and maintain
        consistency across your content.
      </p>
      <button
        onClick={() => setStep(2)}
        className="flex items-center gap-2 py-3 px-6 rounded-full bg-indigo-600 text-white text-base"
      >
        <Plus size={24} /> Create
      </button>
    </div>
  );
};

export default FirstBrand;
