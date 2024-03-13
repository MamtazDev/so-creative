import search from "../../../../assets/search.svg";
import filter from "../../../../assets/filter.svg";
import send from "../../../../assets/send.svg";
import chatBot from "../../../../assets/noChat.svg";

const VideoComments = () => {
  return (
    <div className="border rounded-xl p-6">
      <div className="h-full flex flex-col gap-2 justify-between ">
        <div className="bg-slate-100 rounded-full flex items-center gap-2.5 p-2 ">
          <img src={search} alt="" />
          <input
            className="bg-transparent w-full"
            type="search"
            placeholder="Search comments"
          />
          <button>
            <img src={filter} alt="" />
          </button>
        </div>
        <div className="text-center my-10">
          <img className="mb-6 mx-auto" src={chatBot} alt="" />
          <p className="text-xl font-semibold text-slate-700">No Comments</p>
        </div>
        <div className=" flex items-center gap-2 border rounded-full py-2 pr-2 pl-4">
          <input
            className="w-full"
            type="text"
            placeholder="Write your message"
          />
          <button>
            <img src={send} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComments;
