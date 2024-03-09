import React, { useState } from "react";
import FromLabel from "./FromLabel";
import { useDropzone } from "react-dropzone";

const SupportingMaterial = () => {
  const [file, setFile] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    // accept: {
    //   "image/png": [".png"],
    //   "text/html": [".html", ".htm"],
    // },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    },
  });

  return (
    <div className="border rounded-xl p-6">
      <FromLabel
        title="Supporting Materials"
        subtitle="Any planning templates, scripts, storyboards and any other documentation that may support the creative process."
      />

      <div
        {...getRootProps()}
        className="border border-dashed rounded-xl p-12 w-full mb-5 text-center"
      >
        <input {...getInputProps()} />
        {file ? (
          <div>
            <p>{file.name}</p>
          </div>
        ) : (
          <div>
            <p className="text-lg font-semibold mb-1">
              Upload a File or <span className="text-indigo-600">Browse</span>
            </p>
            <p className="text-sm font-medium text-slate-500">
              Click to browse or drag & drop a file here
            </p>
          </div>
        )}
      </div>

      <button className="primary_btn">Continue</button>
    </div>
  );
};

export default SupportingMaterial;
