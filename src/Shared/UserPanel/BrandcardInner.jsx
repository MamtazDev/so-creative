import close from "../../assets/close.svg";
import mp4 from "../../assets/mp4.svg";
import mp3 from "../../assets/audio.svg";

const BrandcardInner = ({ main, data }) => {
  console.log(data);
  const fileName = data.name.split(".")[0];
  const fileExtension = data.name.split(".").slice(1).join(".");
  const truncatedFileName =
    fileName.length > 10 ? fileName.slice(0, 10) : fileName;

  const removeHandler = () => {
    // Filter out the data to be removed from the main array
    const updatedMain = main.filter((item) => item !== data);
  };
  return (
    <div className="border rounded-xl relative">
      <button onClick={removeHandler} className="absolute top-1 right-1">
        <img src={close} alt="" />
      </button>
      <div className="h-[90px] flex justify-center bg-indigo-100 rounded-t-xl">
        {fileExtension.toLowerCase() === "pdf" ? (
          <img
            className="object-cover"
            src="https://cdn.pixabay.com/photo/2017/03/08/21/20/pdf-2127829_1280.png"
            alt=""
          />
        ) : fileExtension.toLowerCase() === "mp4" ||
          fileExtension.toLowerCase() === "wmv" ||
          fileExtension.toLowerCase() === "mov" ? (
          <img className="object-cover" src={mp4} alt="" />
        ) : fileExtension.toLowerCase() === "mp3" ||
          fileExtension.toLowerCase() === "wav" ? (
          <img className="object-cover" src={mp3} alt="" />
        ) : (
          <img
            className="object-cover"
            src={URL.createObjectURL(data)}
            alt=""
          />
        )}
      </div>
      <div className="py-2 px-3">
        <p className="text-sm font-semibold mb-1">
          {truncatedFileName}.{fileExtension}
        </p>
        <p className="text-xs font-normal">
          {(data.size / (1024 * 1024)).toFixed(2)} MB
        </p>
      </div>
    </div>
  );
};

export default BrandcardInner;
