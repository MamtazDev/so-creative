import { DotsThreeOutline, NotePencil } from "@phosphor-icons/react";
import folderIcon from "../../../assets/folder.svg";
import { useState } from "react";

const FolderCard = ({
  folder,
  item,
  folderIndex,
  selectedFolder,
  onFolderClick,
}) => {
  return (
    <div className="text-center relative">
      <button
        onClick={() => toggleOption(item.id)}
        className="absolute -top-6 -right-6"
      >
        <DotsThreeOutline className="text-slate-500" size={20} weight="fill" />
      </button>

      <div className="absolute top-0 -right-6 bg-indigo-50 p-2 shadow rounded-sm ">
        <button>
          <NotePencil className="text-indigo-600" size={20} weight="fill" />
        </button>
      </div>

      <img className="m-auto mb-2" src={folderIcon} alt="" />
      <p className="text-base font-bold mb-2">Folder Title</p>
      <p className="text-slate-400 text-xs">1.26 GB</p>
    </div>
  );
};

export default FolderCard;
