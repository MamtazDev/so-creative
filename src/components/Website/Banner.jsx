import { PlayCircle } from "@phosphor-icons/react";
import dashboard from "../../assets/website/dashboard.svg";

const Banner = () => {
  return (
    <div className="banner lg:pt-20 pt-[28px] pb-20 lg:pb-[190px]">
      <div className="max-w-[1280px] lg:mx-auto mx-[20px] text-center">
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
          className="text-[#0C0020] text-4xl lg:text-5xl lg:text-[72px] font-extrabold leading-[36px] lg:leading-[110%] tracking-[-1px]  lg:tracking-[-2px] mb-3"
        >
          The easy way to <br className="lg:flex hidden" /> make videos
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="text-[#0C0020] text-lg font-medium mb-8 lg:mb-10 "
        >
          Produce high-quality video content without slow pace{" "}
          <br className="lg:flex hidden" /> and costs of traditional video
          production.
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="600"
          className="flex gap-4 items-center justify-center mb-8 lg:mb-20 "
        >
          <button className="bg-indigo-600 rounded-full text-white text-base font-semibold py-2 px-[20px] ">
            Talk to us
          </button>
          <button className="bg-indigo-100 py-2 pl-4 pr-2 rounded-full text-base font-semibold text-indigo-600 flex items-center gap-1 ">
            Watch Video <PlayCircle size={24} />
          </button>
        </div>
        <img
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="800"
          className="mx-auto"
          src={dashboard}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
