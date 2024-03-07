import { useState } from "react";
import { useDropzone } from "react-dropzone";
import mp4 from "../../../assets/mp4.svg";
import SelectedVideo from "./SelectedVideo";
import UploadProgress from "./UploadProgress";

const UploadFile = () => {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [newSelectedVideo, setNewSelectedVideo] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "video/mp4": [".mp4"],
      "video/mov": [".mov"],
    },
    onDrop: (acceptedFiles) => {
      setNewSelectedVideo([...acceptedFiles]);
      setIsUploading(true);

      let progress = 0;
      const upload = () => {
        if (progress < 100) {
          setTimeout(() => {
            progress += Math.random() * 10;
            progress = Math.min(progress, 100);
            setUploadProgress(Math.floor(progress));
            upload();
          }, 500);
        } else {
          setSelectedVideos([...selectedVideos, ...acceptedFiles]);
          setNewSelectedVideo([]);
          setIsUploading(false);
          setUploadProgress(100);
        }
      };

      upload();
    },
    multiple: false,
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
    <div
      {...getRootProps({ style: dashedBoxStyle })}
      className=" text-center mb-10 rounded-xl relative"
    >
      {/* {isUploading && (
        <UploadProgress
          uploadProgress={uploadProgress}
          newSelectedVideo={newSelectedVideo}
        />
      )} */}
      <div className="p-12  ">
        <input {...getInputProps()} />
        <img className="m-auto mb-5" src={mp4} alt="" />
        <p className="text-lg font-semibold mb-1">Upload a File or</p>
        <p className="text-sm text-slate-500 font-medium">
          Click to browse or drag & drop video files here
        </p>
      </div>

      <SelectedVideo
        selectedVideos={selectedVideos}
        uploadProgress={uploadProgress}
        newSelectedVideo={newSelectedVideo}
        isUploading={isUploading}
      />
    </div>
  );
};

export default UploadFile;
