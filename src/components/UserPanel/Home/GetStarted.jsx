import plus from "../../../assets/plus.png";
import edit from "../../../assets/edit.png";
import upload from "../../../assets/upload.png";
import access from "../../../assets/access.png";

const GetStarted = () => {
  const details = [
    {
      pic: plus,
      name: "New Projects",
      bgColor: "bg-purple-100",
      buttonBg: "bg-purple-950",
      title: "Create your first project",
    },
    {
      pic: edit,
      name: "Edit Video",
      bgColor: "bg-pink-100",
      buttonBg: "bg-pink-900",
      title: "Make changes to your videos",
    },
    {
      pic: upload,
      name: "Upload Brand",
      bgColor: "bg-emerald-100",
      buttonBg: "bg-emerald-900",
      title: "Upload your brand kit",
    },
    {
      pic: access,
      name: "Access Files",
      bgColor: "bg-amber-100",
      buttonBg: "bg-amber-700",
      title: "Access your file uploads",
    },
  ];
  return (
    <div className="max-w-[672px] m-auto">
      <p className=" text-xl font-semibold mb-5">Get Started</p>
      <div className="grid grid-cols-2 gap-6">
        {details.map((data, index) => (
          <div key={index}>
            <div
              className={`${data.bgColor} w-full h-[178px] rounded-xl flex items-center justify-center p-4 mb-4`}
            >
              <button
                className={`${data.buttonBg} flex text-white font-bold text-base items-center gap-3 py-2 pl-2 pr-4 rounded-[72px]`}
              >
                <img src={data.pic} alt="" />
                {data.name}
              </button>
            </div>
            <p className=" font-bold text-base">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
