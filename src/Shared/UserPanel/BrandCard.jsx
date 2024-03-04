import { Plus } from "@phosphor-icons/react";
import close from "../../assets/close.png";

const BrandCard = ({ brand, inputRef }) => {
  return (
    <div className="grid grid-cols-5 gap-6">
      {brand.map((data, index) => {
        const fileName = data.name.split(".")[0];
        const fileExtension = data.name.split(".").slice(1).join(".");
        const truncatedFileName =  fileName.length > 10 ? fileName.slice(0, 10) : fileName;

        return (
          <div key={index} className="border rounded-xl relative">
            <button className="absolute top-1 right-1">
              <img src={close} alt="" />
            </button>
            <div className="h-[90px] bg-indigo-100 rounded-t-xl"></div>
            <div className="py-2 px-3">
              <p className="text-sm font-semibold mb-1">
                {truncatedFileName}.{fileExtension}
              </p>
              <p className="text-xs font-normal">{data.size / 1000}KB</p>
            </div>
          </div>
        );
      })}
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
