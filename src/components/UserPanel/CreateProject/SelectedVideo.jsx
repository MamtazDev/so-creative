import React from "react";

const SelectedVideo = ({
  selectedVideos,
  uploadProgress,
  newSelectedVideo,
  isUploading,
}) => {
  return (
    <div
      className={`text-start ${
        (selectedVideos.length > 0 || isUploading) &&
        "border-dashed  p-6  border-t"
      } `}
    >
      <div className="grid grid-cols-5 gap-4">
        {selectedVideos.length > 0 &&
          selectedVideos.map((video, index) => (
            <div key={index}>
              <video className="rounded-xl mb-4 h-[108px] w-full" controls>
                <source src={URL.createObjectURL(video)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-sm font-medium">{video.name}</p>
              <p className="text-slate-500 font-normal text-xs">
                {(video.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          ))}
        <div>
          {isUploading && (
            <div>
              <div className="relative">
                <video className="rounded-xl h-[108px] w-full" controls>
                  <source
                    src={URL.createObjectURL(newSelectedVideo[0])}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <p
                  style={{ transform: "translate(-50% -50%)" }}
                  className="text-sm  absolute bg-white rounded-[56px] text-semibold py-1 px-2 top-[30%] left-[40%]"
                >
                  {uploadProgress}%
                </p>
              </div>
              <p className="text-sm font-medium mt-4">
                {newSelectedVideo[0].name}
              </p>
              <p className="text-slate-500 font-normal text-xs">
                {(newSelectedVideo[0].size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedVideo;
