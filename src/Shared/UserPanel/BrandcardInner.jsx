import mp3 from "../../assets/audio.svg";
import close from "../../assets/close.svg";
import mp4 from "../../assets/mp4.svg";

const BrandcardInner = ({ main, data, setMain, index }) => {
  const { fileExtension, truncatedFileName, type } = processData(data);

  const removeHandler = () => {
    const updatedMain = main.filter((item) => item !== data);

    setMain((prevState) => ({
      ...prevState,
      [index]: updatedMain,
    }));
  };

  return (
    <div className="border rounded-xl relative">
      <span onClick={removeHandler} className="absolute top-1 right-1">
        <img src={close} alt="" />
      </span>
      <div className="h-[90px] flex justify-center bg-indigo-100 rounded-t-xl overflow-hidden">
        <Img extension={fileExtension} data={data} type={type} />
      </div>
      <div className="py-2 px-3">
        <p className="text-sm font-semibold mb-1">
          {truncatedFileName}.{fileExtension}
        </p>
        {type === "object" && (
          <p className="text-xs font-normal">
            {(data.size / (1024 * 1024)).toFixed(2)} MB
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandcardInner;

function processData(data) {
  let fileName, fileExtension, truncatedFileName, type;

  if (typeof data === "object" && data !== null && data.name) {
    fileName = data.name.split(".")[0];
    fileExtension = data.name.split(".").slice(1).join(".");
    truncatedFileName = fileName.length > 10 ? fileName.slice(0, 10) : fileName;
    type = "object";
  } else if (typeof data === "string") {
    const urlParts = data.split("/");
    const fullFileName = urlParts[urlParts.length - 1];
    fileName = fullFileName.split(".")[0];
    fileExtension = fullFileName.split(".").slice(1).join(".");
    truncatedFileName = fileName.length > 10 ? fileName.slice(0, 10) : fileName;
    type = "string";
  } else {
    throw new Error("Unsupported data type or malformed data");
  }

  return { fileName, fileExtension, truncatedFileName, type };
}

const Img = ({ extension, data, type }) => {
  return (
    <>
      {extension.toLowerCase() === "pdf" ? (
        <img
          className="object-cover rounded-t-xl"
          src="https://cdn.pixabay.com/photo/2017/03/08/21/20/pdf-2127829_1280.png"
          alt=""
        />
      ) : extension.toLowerCase() === "mp4" ||
        extension.toLowerCase() === "wmv" ||
        extension.toLowerCase() === "mov" ? (
        <img className="object-cover" src={mp4} alt="" />
      ) : extension.toLowerCase() === "mp3" ||
        extension.toLowerCase() === "wav" ? (
        <img className="object-cover" src={mp3} alt="" />
      ) : (
        <img
          className="object-cover"
          src={
            type === "string"
              ? data
              : type === "object" && data !== null
              ? URL.createObjectURL(data)
              : ""
          }
          alt=""
        />
      )}
    </>
  );
};
