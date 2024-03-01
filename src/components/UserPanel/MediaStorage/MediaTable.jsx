import React from "react";
import { mediaStorage } from "../../../Data/AllDatas";
import mp4 from "../../../assets/mp4.png";
import folder from "../../../assets/folder.png";
import { DotsThreeOutline } from "@phosphor-icons/react";

const MediaTable = () => {
  const folders = mediaStorage.filter((item) => item.folder);
  const videos = mediaStorage.filter((item) => item.video);
  const combinedItems = folders.concat(videos);
  return (
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
            <th className="text-start">Total Size</th>
            <th className="text-start">Last Modified</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {combinedItems.map((data, index) => (
            <tr className="text-base font-semibold" key={index}>
              <td>
                <div className="flex gap-4 items-center">
                  <img src={data.folder ? folder : mp4} alt="" />
                  <p>{data.folder ? "Folder Title" : "filename.mp4"}</p>
                </div>
              </td>
              <td>1.26 GB</td>
              <td>1 day ago</td>
              <td>
                <DotsThreeOutline
                  className="text-slate-500"
                  size={20}
                  weight="fill"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MediaTable;