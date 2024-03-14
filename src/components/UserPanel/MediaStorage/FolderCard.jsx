import { DotsThreeOutline, NotePencil } from "@phosphor-icons/react";
import folderIcon from "../../../assets/folder.svg";
import { formatFileSize } from "../../../utils/converter";
import { useNavigate } from "react-router";
import CreateFolderModal from "../../../Modal/CreateFolderModal";
import { useState } from "react";

const FolderCard = ({ folder, setClickedItem, clickedItem }) => {
  const navigate = useNavigate();

  const handleClick = (e, id) => {
    e.stopPropagation();
    if (clickedItem === id) {
      setClickedItem(null);
    } else {
      setClickedItem(id);
    }
  };

  const [openEditFolderModal, setEditFolderModal] = useState(false);
  const [title, setTitle] = useState(null);

  return (
    <div
      className="text-center relative cursor-pointer"
      onClick={() => navigate(`/user/media-storage/folder/${folder?._id}`)}
    >
      <button
        className="absolute -top-6 -right-6"
        onClick={(e) => handleClick(e, folder._id)}
      >
        <DotsThreeOutline className="text-slate-500" size={20} weight="fill" />
      </button>

      {clickedItem === folder._id && (
        <div
          className="absolute top-0 -right-6 bg-indigo-50 p-2 shadow rounded-sm "
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditFolderModal(true);
              setTitle(folder.title);
            }}
          >
            <NotePencil className="text-indigo-600" size={20} weight="fill" />
          </button>
        </div>
      )}

      <img className="m-auto mb-2" src={folderIcon} alt="" />
      <p className="text-base font-bold mb-2">{folder?.title}</p>
      <p className="text-slate-400 text-xs">
        {formatFileSize(folder?.folderSize)}
      </p>
      {openEditFolderModal && (
        <CreateFolderModal
          setOpenCreateFolderModal={setEditFolderModal}
          folderTitle={title}
          clickedItem={clickedItem}
          setClickedItem={setClickedItem}
        />
      )}
    </div>
  );
};

export default FolderCard;
