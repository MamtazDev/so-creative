import search from "../../../../assets/search.svg";
import filter from "../../../../assets/filter.svg";
import send from "../../../../assets/send.svg";
import aveter from "../../../../assets/aveter1.svg";
import chatBot from "../../../../assets/noChat.svg";
import { useState } from "react";

const VideoComments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSend = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  return (
    <div className="border rounded-xl p-6">
      <div className="h-full flex flex-col gap-6 justify-between ">
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
        {comments.length === 0 ? (
          <div className="text-center my-10">
            <img className="mb-6 mx-auto" src={chatBot} alt="" />
            <p className="text-xl font-semibold text-slate-700">No Comments</p>
          </div>
        ) : (
          <div className="overflow-y-auto no_scrollbar max-h-[500px] flex h-full flex-col gap-6">
            {comments.map((comment, index) => (
              <div className="activity_card flex gap-2 " key={index}>
                <div className="left_activity_card">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={aveter}
                    alt="activity_img"
                  />
                </div>
                <div className="right_activity_card">
                  <h3 className="text-base font-semibold text-slate-900 pb-3">
                    Shawn Mahbub
                    <span className="bg-blue-500 text-xs font-bold text-white py-2 px-2 rounded ml-[6px]">
                      Editor
                    </span>
                  </h3>
                  <p className="text-sm font-normal text-slate-700 pb-2">
                    {comment}
                  </p>
                  <p className="text-slate-500 text-xs font-medium">
                    29 Apr, 2020 4:28 PM
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className=" flex items-center gap-2 border rounded-full py-2 pr-2 pl-4">
          <input
            className="w-full"
            type="text"
            placeholder="Write your message"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSend}>
            <img src={send} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComments;
