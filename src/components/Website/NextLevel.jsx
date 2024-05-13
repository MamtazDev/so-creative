import { PlayCircle } from "@phosphor-icons/react";

const NextLevel = () => {
  return (
    <div className="next_level lg:pt-20 py-7 lg:pb-16">
      <div className="container mx-auto text-center">
        <p className="text-[#0C0020] text-4xl lg:text-[56px] font-extrabold leading-[48px] lg:leading-[64px] tracking-[-1px] mb-8 lg:mb-10">
          Take your videos to the <br className="hidden lg:block" /> next level
        </p>
        <div className="flex gap-4 items-center justify-center">
          <button className="bg-indigo-600 rounded-full text-white text-base font-bold py-2 px-5 ">
            Talk to us
          </button>
          <button className="bg-indigo-100 py-2 pl-4 pr-2 rounded-full text-base font-bold text-indigo-600 flex items-center gap-1 ">
            Watch Video <PlayCircle size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NextLevel;
