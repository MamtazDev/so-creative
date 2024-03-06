import { useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import mp4 from "../../../assets/mp4.svg";
import SelectedVideo from "./SelectedVideo";

const UploadFile = () => {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "video/mp4": [".mp4"],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setSelectedVideos([...selectedVideos, ...acceptedFiles]);
      }
      setIsDragActive(false);
    },
    onDragEnter: () => {
      setIsDragActive(true);
    },
    onDragLeave: () => {
      setIsDragActive(false);
    },
  });

  const dashedBoxStyle = {
    border: isDragActive ? "1px dashed #4F46E5 " : "1px dashed #E2E8F0",
    background: isDragActive ? "#EEF2FF" : "",
  };

  return (
    <div className="border border-dashed rounded-xl text-center">
      <div {...getRootProps({ style: dashedBoxStyle })} className="p-12">
        <input {...getInputProps()} />
        <img className="m-auto mb-5" src={mp4} alt="" />
        <p className="text-lg font-semibold mb-1">Upload a File or</p>
        <p className="text-sm text-slate-500 font-medium">
          Click to browse or drag & drop video files here
        </p>
      </div>
      {selectedVideos.length > 0 && (
        <SelectedVideo selectedVideos={selectedVideos} />
      )}
    </div>
  );
};

export default UploadFile;
