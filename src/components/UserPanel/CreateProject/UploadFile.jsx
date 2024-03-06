import { useState } from "react";
import { useDropzone } from "react-dropzone";
import mp4 from "../../../assets/mp4.svg";
import SelectedVideo from "./SelectedVideo";

const UploadFile = () => {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "video/mp4": [".mp4"],
    },
    onDrop: (acceptedFiles) => {
      setIsUploading(true);
      let progress = 0;

      const upload = () => {
        if (progress < 100) {
          setTimeout(() => {
            progress += Math.random() * 10;
            setUploadProgress(progress);
            upload();
          }, 500); // Simulate upload progress every 0.5 seconds
        } else {
          setIsUploading(false);
          setUploadProgress(0);
          setSelectedVideos([...selectedVideos, ...acceptedFiles]);
        }
      };

      upload();
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
      {isUploading && (
        <div>
          <div className="bg-indigo-50 h-2 rounded-md">
            <div
              style={{ width: `${uploadProgress}%` }}
              className="bg-indigo-600 rounded-md h-2"
            ></div>
          </div>
          <p>{uploadProgress}%</p>
        </div>
      )}
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
