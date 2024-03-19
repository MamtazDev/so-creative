import React from "react";
import { timeAgo } from "../../../utils/converter";

const AllProjectFileLayout = ({ data }) => {
  return (
    <div>
      <div>
        <table
          style={{
            borderCollapse: "separate",
            borderSpacing: "24px",
          }}
          className="w-full"
        >
          <thead>
            <tr className="text-slate-500 font-medium text-base">
              <th className="text-start ">Name</th>
              <th className="text-start">Status</th>
              <th className="text-start">Date Modified</th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex gap-4 items-center">
                      {" "}
                      {/* <iframe
                        className="rounded-xl mb-4"
                        width="113"
                        height="64"
                        src="https://www.youtube.com/embed/Z76aWfCc7_k?si=GW52k_zAdVfPOw66"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe> */}
                      <img
                        // className="absolute top-0 right-0 w-full h-full z-50"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQudo2gDpZS8r1PDPBqiA9cwQ8Bt-e6diLw&usqp=CAU"
                        alt=""
                      />
                      <p>{item.projectTitle}</p>
                    </div>
                  </td>
                  <td>
                    <button
                      className={`${
                        item.status === "Draft"
                          ? "bg-slate-800"
                          : "bg-green-500"
                      } text-white font-semibold text-sm px-[6px] rounded-md`}
                    >
                      {item.status}
                    </button>
                  </td>
                  <td className="text-base font-semibold">
                    {timeAgo(item?.createdAt)}
                  </td>
                </tr>
              ))
            ) : (
              <p>There is no data</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProjectFileLayout;
