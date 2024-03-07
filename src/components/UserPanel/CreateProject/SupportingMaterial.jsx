import React from "react";
import FromLabel from "./FromLabel";

const SupportingMaterial = () => {
  return (
    <div className="border rounded-xl p-6 mb-6">
      <FromLabel
        title="Supporting Materials"
        subtitle="Any planning templates, scripts, storyboards and any other documentation that may support the creative process."
      />
      <div></div>
      <button className="py-3 px-6 bg-indigo-600 rounded-full text-white text-base font-semibold ">
        Continue
      </button>
    </div>
  );
};

export default SupportingMaterial;
