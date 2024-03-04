/* eslint-disable react/prop-types */
const VideoCard = ({ status, name }) => {
  return (
    <div className="relative ">
      {" "}
      <div className="overflow-hidden rounded-xl h-[160px] mb-4">
        <iframe
          className="  rounded-xl hover:scale-110 transition-all duration-300 ease-in"
          width="100%"
          height="160"
          src="https://www.youtube.com/embed/Z76aWfCc7_k?si=GW52k_zAdVfPOw66"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
      <button
        className={`${
          status === "Draft" ? "bg-slate-800" : "bg-green-500"
        } text-white font-semibold text-sm px-[6px] rounded-md absolute top-2 right-2`}>
        {status}
      </button>
      <p className="text-base  font-semibold mb-1">{name}</p>
      <p className="text-slate-500 text-sm font-normal">1 day ago</p>
    </div>
  );
};

export default VideoCard;
