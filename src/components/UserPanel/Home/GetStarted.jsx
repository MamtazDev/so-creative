import { details } from "../../../utils/data";

const GetStarted = () => {
  return (
    <div>
      <p className=" text-xl font-semibold mb-5">Get Started</p>
      <div className="grid grid-cols-4 gap-6">
        {details.length > 0 ? (
          details.map((data, index) => (
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
          ))
        ) : (
          <p>There is no data</p>
        )}
      </div>
    </div>
  );
};

export default GetStarted;
