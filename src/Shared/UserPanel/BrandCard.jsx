import { Plus } from "@phosphor-icons/react";
import close from "../../assets/close.png";

const BrandCard = ({ brand, inputRef }) => {
  const fileName = brand.name;
  const fileNameWithoutExtension = fileName.substring(
    0,
    fileName.lastIndexOf(".")
  );
  const fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
  return (
    <div className="grid grid-cols-5 gap-6">
      <div className="border rounded-xl relative">
        <img className="absolute top-1 right-1" src={close} alt="" />
        <div className="h-[90px] bg-indigo-100 rounded-t-xl"></div>
        <div className="py-2 px-3">
          <p className="text-sm font-semibold mb-1 ">
            {" "}
            {fileNameWithoutExtension.length > 10
              ? `${fileNameWithoutExtension.substring(0, 10)}`
              : fileNameWithoutExtension}
            .{fileExtension}
          </p>
          <p className="text-xs font-normal">{brand.size / 1000}KB</p>
        </div>
      </div>
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
