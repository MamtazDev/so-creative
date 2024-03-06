import React from "react";
import mp4 from "../../../assets/mp4.svg";
import folder from "../../../assets/folder.svg";
import { DotsThreeOutline } from "@phosphor-icons/react";
import { mediaStorage } from "../../../utils/data";
import { formatFileSize, timeAgo } from "../../../utils/converter";
import { Link } from "react-router-dom";

const MediaTable = ({ data }) => {
  const folders = data.folders;
  const videos = data.files;
  const combinedItems = data.folders ? folders.concat(videos) : data;
  console.log(combinedItems, "dfjkdfj");

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
                    {data.folderData && (
                      <Link
                        to={`/user/media-storage/folder/${data.folderData._id}`}
                      >
                        <img src={folder} alt="" />
                      </Link>
                    )}
                    {data.fileData && <img src={mp4} alt="" />}
                    {data.title && <img src={mp4} alt="" />}
                    {data.folderData && (
                      <p>
                        <Link
                          to={`/user/media-storage/folder/${data.folderData._id}`}
                        >
                          {data.folderData.title}
                        </Link>
                      </p>
                    )}
                    {data.fileData && <p>{data.fileData.title}</p>}
                    {data.title && <p>{data.title}</p>}
                  </div>
                </td>
                <td>
                  {data.folderData && (
                    <span>{formatFileSize(data.folderData.folderSize)}</span>
                  )}
                  {data.fileData && (
                    <span>{formatFileSize(data.fileData.fileSize)}</span>
                  )}
                  {data.title && <span>{formatFileSize(data.fileSize)}</span>}
                </td>
                <td>
                  {data.folderData && (
                    <span>{timeAgo(data.folderData.updatedAt)}</span>
                  )}
                  {data.fileData && (
                    <span>{timeAgo(data.fileData.updatedAt)}</span>
                  )}
                  {data.title && <span>{timeAgo(data.updatedAt)}</span>}
                </td>
                <td>
                  <DotsThreeOutline
                    className="text-slate-500"
                    size={20}
                    weight="fill"
                  />
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
