import React from "react";
import mp4 from "../../../assets/mp4.svg";
import folder from "../../../assets/folder.svg";
import {
  DotsThreeOutline,
  DownloadSimple,
  NotePencil,
  Trash,
} from "@phosphor-icons/react";
import { mediaStorage } from "../../../utils/data";

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
          {combinedItems.length > 0 ? (
            combinedItems.map((data, index) => (
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
                  {data.folder ? (
                    <button>
                      <NotePencil
                        className="text-indigo-600"
                        size={20}
                        weight="fill"
                      />
                    </button>
                  ) : (
                    <div className="flex  items-center gap-2">
                      <button>
                        <Trash
                          className="text-red-600"
                          size={20}
                          weight="fill"
                        />
                      </button>
                      <button>
                        <DownloadSimple
                          className="text-indigo-600"
                          size={20}
                          weight="fill"
                        />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <p>There is no data</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MediaTable;
