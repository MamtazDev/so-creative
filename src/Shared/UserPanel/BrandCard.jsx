import { Plus } from "@phosphor-icons/react";
import BrandcardInner from "./BrandcardInner";

const BrandCard = ({ brand, inputRef }) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {brand.map((data, index) => (
        <BrandcardInner key={index} data={data} />
      ))}
      <div
        onClick={inputRef}
        className="border border-dashed rounded-xl flex items-center justify-center"
      >
        <Plus className="text-indigo-600" size={24} />
      </div>
    </div>
  );
};

export default BrandCard;
