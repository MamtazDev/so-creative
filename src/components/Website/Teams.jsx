import { teams } from "../../utils/data";

const Teams = () => {
  return (
    <div className="team pb-[70px]">
      <div className="max-w-[1280px] lg:mx-auto mx-[20px]">
        <p className="text-slate-900 text-lg font-medium mb-12 text-center">
          Trusted by teams at
        </p>
        <div className="flex items-center gap-6 justify-between overflow-x-auto no_scrollbar ">
          {teams.map((data, index) => (
            <img key={index} src={data} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
