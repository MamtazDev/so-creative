import React from "react";
import { timeAgo } from "../../../utils/converter";
import { useDispatch } from "react-redux";
import {
  setDraftStep,
  setSelectedProject,
  setShowDraftModal,
} from "../../../features/project/projectSlice";
import { useNavigate } from "react-router-dom";

const AllProjects = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    if (item.status === "Draft") {
      dispatch(setShowDraftModal(true));
      dispatch(setDraftStep(2));
      dispatch(setSelectedProject(item));
    } else {
      navigate(`/user/project-details/${item._id}`);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-6 mb-10">
      {data &&
        data?.length > 0 &&
        data.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigate(item)}
            className="border rounded-2xl p-4 flex gap-4 items-center cursor-pointer"
          >
            {/* <div className="relative  mr-6 ">
              {" "}
              <div className="overflow-hidden rounded-xl max-h-[160px] h-full mb-4 relative group">
                <img
                  // className="absolute top-0 right-0 w-full h-full z-50"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQudo2gDpZS8r1PDPBqiA9cwQ8Bt-e6diLw&usqp=CAU"
                  alt=""
                />

                <button
                  className={`${
                    item?.status === "Draft" ? "bg-slate-800" : "bg-green-500"
                  } text-white font-semibold text-sm px-[6px] rounded-md absolute top-2 right-2 z-50`}
                >
                  {item?.status}
                </button>
              </div>
            </div>
            <p className="text-base  font-semibold mb-1">
              {item?.projectTitle}
            </p>
            <p className="text-slate-500 text-sm font-normal">
              {timeAgo(item?.createdAt)}
            </p> */}

            <div className="relative">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*vbVPr3brcmImEQh0cckBOw.jpeg"
                alt=""
                className="w-[151px] h-[84px] rounded"
              />
              <button className="absolute top-1 right-1 bg-orange-500 text-[10.5px] text-white py-[1.75px] px-[5.25px] rounded-md ">
                {item?.status}
              </button>
            </div>
            <div>
              <p className="text-base font-bold mb-2">{item?.projectTitle}</p>
              <p className="text-xs text-slate-500 font-normal mb-1">
                Remaining Delivery Time
              </p>
              <p className="text-sm font-semibold">
                {" "}
                {timeAgo(item?.createdAt)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllProjects;
