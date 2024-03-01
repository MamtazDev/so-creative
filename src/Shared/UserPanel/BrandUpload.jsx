import { useRef } from "react";

const BrandUpload = ({ title, subTitle, buttonName, inputRef }) => {
  return (
    <div>
      <p className="text-xl font-bold mb-2">{title}</p>
      <p className="text-slate-500 font-normal text-sm mb-6">{subTitle}</p>

      <button
        onClick={inputRef}
        type="button"
        className="border border-indigo-600 text-indigo-600 rounded-full py-2 px-6"
      >
        {buttonName ? buttonName : "Upload"}
      </button>
    </div>
  );
};

export default BrandUpload;
