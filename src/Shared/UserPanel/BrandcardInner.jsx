import React from "react";

const BrandcardInner = ({ data }) => {
  const fileName = data.name.split(".")[0];
  const fileExtension = data.name.split(".").slice(1).join(".");
  const truncatedFileName =
    fileName.length > 10 ? fileName.slice(0, 10) : fileName;
  return (
    <div className="border rounded-xl relative">
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
};

export default BrandcardInner;
