import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { videos } from "../../../utils/data";

const Draft = ({ setShowDraftModal, setStep }) => {
  const [visibleVideos, setVisibleVideos] = useState(9);
  const handleLoadMore = () => {
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 9);
  };
  return (
    <div>
      <div className="flex items-center gap-4 justify-between mb-6">
        <p className="text-xl font-bold">Select From Draft</p>

        <button onClick={() => setShowDraftModal(false)}>
          <img src={close} alt="" />
        </button>
      </div>
      <div className="flex items-center gap-5 rounded-full bg-slate-100 p-3 w-full mb-10">
        <MagnifyingGlass size={16} />
        <input
          className="w-full bg-transparent"
          type="search"
          placeholder="Search projects"
        />
      </div>

      <div className="border rounded-3xl mb-10">
        {videos.slice(0, visibleVideos).map((data, index) => (
          <div
            className="flex items-center justify-between gap-4 p-4 border-b"
            key={index}
          >
            <div className="flex items-center gap-4">
              <input className="accent-indigo-600" type="checkbox" />
              <div className="relative">
                <img
                  className="w-[113px] h-[64px] rounded-xl"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQudo2gDpZS8r1PDPBqiA9cwQ8Bt-e6diLw&usqp=CAU"
                  alt=""
                />
                <p className="absolute bottom-1 left-1 px-1.5 py-0.5 text-xs font-semibold bg-slate-900 rounded-md text-white">
                  12.10
                </p>
              </div>
              <p>{data.name}</p>
            </div>
            <p>1 day ago</p>
          </div>
        ))}
        {visibleVideos < videos.length && (
          <button
            className="text-base font-semibold py-4 px-6 w-full"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>

      <button onClick={() => setStep(2)} className="primary_btn w-full">
        Continue
      </button>
    </div>
  );
};

export default Draft;
