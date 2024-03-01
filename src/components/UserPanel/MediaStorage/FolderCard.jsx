import folder from "../../../assets/folder.png";

const FolderCard = () => {
  return (
    <div className="text-center">
      <img className="m-auto mb-2" src={folder} alt="" />
      <p className="text-base font-bold mb-2">Folder Title</p>
      <p className="text-slate-400 text-xs">1.26 GB</p>
    </div>
  );
};

export default FolderCard;
