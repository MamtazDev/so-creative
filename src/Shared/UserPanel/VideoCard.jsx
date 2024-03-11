import { BASE_API_URL } from "../../config/config";
import { timeAgo } from "../../utils/converter";

/* eslint-disable react/prop-types */
const VideoCard = ({ status, name, data }) => {
  return (
    <div className="relative ">
      {" "}
      <div className="overflow-hidden rounded-xl max-h-[160px] h-full mb-4">
        {/* <iframe
          className="  rounded-xl hover:scale-110 transition-all duration-300 ease-in"
          width="100%"
          height="160"
          src={`${BASE_API_URL}/${data.file}`}
          title={data?.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}

        <video className="h-full" controls>
          <source src={`${BASE_API_URL}/${data.file}`} />
        </video>
      </div>
      <button
        className={`${
          status === "Draft" ? "bg-slate-800" : "bg-green-500"
        } text-white font-semibold text-sm px-[6px] rounded-md absolute top-2 right-2`}
      >
        {status}
      </button>
      <p className="text-base  font-semibold mb-1">{name}</p>
      <p className="text-slate-500 text-sm font-normal">
        {timeAgo(data.createdAt)}
      </p>
    </div>
  );
};

export default VideoCard;
