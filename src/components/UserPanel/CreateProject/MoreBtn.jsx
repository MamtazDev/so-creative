import { DotsThreeOutline } from "@phosphor-icons/react";

const MoreBtn = () => {
  return (
    <div className="border border-dashed rounded-xl text-slate-500 p-2 text-center w-[120px] h-full ">
      <DotsThreeOutline className="mb-2 mx-auto" size={24} weight="fill" />
      <p className="text-xs font-semibold">More</p>
    </div>
  );
};

export default MoreBtn;
