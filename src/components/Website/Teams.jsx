import { teams } from "../../utils/data";

const Teams = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
      className="team pb-[70px] lg:pb-24 "
    >
      <div className="max-w-[1280px] lg:mx-auto mx-6">
        <p className="text-slate-900 text-lg font-medium mb-8 lg:mb-12 text-center">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center gap-9 justify-around lg:justify-between  ">
          {teams.map((data, index) => (
            <img key={index} src={data} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
