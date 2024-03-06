import { DotsThreeOutline } from "@phosphor-icons/react";
import folderIcon from "../../../assets/folder.svg";
import { formatFileSize } from "../../../utils/converter";

const FolderCard = ({ folder, folderIndex, selectedFolder, onFolderClick }) => {
  console.log(folder, "ggg");
  return (
    <div className="text-center relative">
      <button className="absolute -top-6 -right-6">
        <DotsThreeOutline className="text-slate-500" size={20} weight="fill" />
      </button>
      <img className="m-auto mb-2" src={folderIcon} alt="" />
      <p className="text-base font-bold mb-2">{folder?.title}</p>
      <p className="text-slate-400 text-xs">
        {formatFileSize(folder?.folderSize)}
      </p>
    </div>
  );
};

export default FolderCard;
