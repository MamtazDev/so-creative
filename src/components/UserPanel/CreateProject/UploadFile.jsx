import { useRef, useState } from "react";
import mp4 from "../../../assets/mp4.svg";

const UploadFile = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef();
  const handleClick = () => {
    videoRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedVideo(file);
    }
  };
  console.log(selectedVideo, "pppp");
  return (
    <div className="border border-dashed border-indigo-600 rounded-xl bg-indigo-50 p-12 text-center">
      <div onClick={handleClick}>
        <input
          ref={videoRef}
          className="hidden"
          type="file"
          accept="video/mp4, video/quicktime"
          onChange={handleFileChange}
        />
        <img className="m-auto mb-5" src={mp4} alt="" />
        <p className="text-lg font-semibold mb-1">Upload a File or</p>
        <p className="text-sm text-slate-500 font-medium">
          Click to browse or drag & drop a file here
        </p>
      </div>
    </div>
  );
};

export default UploadFile;
