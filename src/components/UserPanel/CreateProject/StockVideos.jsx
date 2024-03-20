import ReactPlayer from "react-player";
import MoreBtn from "./MoreBtn";
import check from "../../../assets/check-icon.svg";
import VimeoPlayer from "react-player/vimeo";
import { useState } from "react";

const StockVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleSelected = (index) => {
    if (selectedVideo.includes(index)) {
      const newVideo = selectedVideo.filter((i) => i !== index);
      setSelectedVideo(newVideo);
    } else {
      setSelectedVideo([...selectedVideo, index]);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
  return (
    <div className="mb-10">
      <p className="text-xl font-bold mb-6">Stock Videos</p>
      <div className="flex items-center gap-6">
        {[1, 2, 3, 4].map((data, index) => (
          <div
            className={`${
              selectedVideo.includes(index) && "border-2 border-[#C67CFF] p-1 "
            } ${isPlaying && "scale-125"} relative  w-[211px] h-[108px]  `}
            key={index}
          >
            {selectedVideo.includes(index) ? (
              ""
            ) : (
              <img
                onClick={() => handleSelected(index)}
                className="absolute top-2 right-2"
                src={check}
                alt=""
              />
            )}
            <VimeoPlayer
              className="bg-gray-400 rounded-xl"
              url="https://vimeo.com/626780181"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
        ))}
        <MoreBtn />
      </div>
    </div>
  );
};

export default StockVideos;
