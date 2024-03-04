import mp4 from "../../../assets/mp4.svg";

const VideoCard = () => {
  return (
    <div className="text-center">
      <img className="m-auto mb-2" src={mp4} alt="" />
      <p className="text-base font-bold mb-2">filename.mp4</p>
      <p className="text-slate-400 text-xs">1.26 GB</p>
    </div>
  );
};

export default VideoCard;
