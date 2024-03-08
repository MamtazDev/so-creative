import { useRef, useState } from "react";

const VideoCard = ({ status, name }) => {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!videoRef.current.paused);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  return (
    <div className="relative  mr-6 ">
      {" "}
      <div className="overflow-hidden rounded-xl h-[160px] mb-4 relative group">
        {!isPlaying && (
          <>
            <img
              className="absolute top-0 right-0 w-full h-full z-50"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQudo2gDpZS8r1PDPBqiA9cwQ8Bt-e6diLw&usqp=CAU"
              alt=""
            />
            <button className="bg-black text-white p-1 text-xs rounded-xl absolute bottom-3 left-3 z-50">
              {duration}
            </button>
          </>
        )}
        <button
          onClick={handlePlayButtonClick}
          className="hidden group-hover:flex bg-black  rounded-full w-10 h-10  items-center justify-center  absolute top-[45%] left-[45%] z-50 text-white"
        >
          ►{" "}
        </button>
        <video
          ref={videoRef}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onTimeUpdate={handleTimeUpdate}
          className="rounded-xl h-[160px] w-full"
          controls
        >
          <source
            src="https://www.grepper.com/video_uploads/1063173_GTPn4teUPe2CRY4mEeO3csjXc8X5NYy6wIeL8pMPIdW1wLzLjNQjH1V.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <button
          className={`${
            status === "Draft" ? "bg-slate-800" : "bg-green-500"
          } text-white font-semibold text-sm px-[6px] rounded-md absolute top-2 right-2 z-50`}
        >
          {status}
        </button>
      </div>
      <p className="text-base  font-semibold mb-1">{name}</p>
      <p className="text-slate-500 text-sm font-normal">1 day ago</p>
    </div>
  );
};

export default VideoCard;
