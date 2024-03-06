import React from "react";

const SelectedVideo = ({ selectedVideos }) => {
  return (
    <div className="text-start border-t border-dashed p-6">
      <div className="grid grid-cols-5 gap-4">
        {selectedVideos.map((video, index) => (
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
      </div>
    </div>
  );
};

export default SelectedVideo;
