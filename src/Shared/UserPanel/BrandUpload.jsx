import { useRef } from "react";
import BrandCard from "./BrandCard";

const BrandUpload = ({
  title,
  subTitle,
  inputName,
  buttonName,
  inputRef,
  brandData,
}) => {
  return (
    <div>
      <p className="text-xl font-bold mb-2">{title}</p>
      <p className="text-slate-500 font-normal text-sm mb-6">{subTitle}</p>

      {Object.keys(brandData).find((i) => i === inputName) ? (
        <BrandCard brand={brandData[inputName]} inputRef={inputRef} />
      ) : (
        <button
          onClick={inputRef}
          type="button"
          className="border border-indigo-600 text-indigo-600 rounded-full py-2 px-6"
        >
          {buttonName ? buttonName : "Upload"}
        </button>
      )}
    </div>
  );
};

export default BrandUpload;
