import creating from "../../../assets/creating.svg";
import created from "../../../assets/created.svg";
import useLoading from "../../../hooks/useLoading";
import { Plus } from "@phosphor-icons/react";

const Creating = () => {
  const { isLoading } = useLoading();
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {isLoading ? (
        <>
          <img className="mb-6" src={creating} alt="" />
          <p className="text-xl font-bold">Creating your brand...</p>
        </>
      ) : (
        <>
          <img className="mb-10" src={created} alt="" />
          <p className="text-4xl font-bold mb-3">
            SoCreative Brand Kit Created!
          </p>
          <p className="max-w-[768px] text-center text-lg font-normal text-slate-500 mb-6">
            Use your brand assets to bring harmonous asthetics across your
            projects. You can also add a new brand kit if you have more one to
            brand to add.
          </p>
          <div className="flex items-center gap-6">
            <button className="border border-indigo-600 rounded-full py-3 px-6 flex items-center gap-2 text-indigo-600 text-base font-semibold">
              <Plus size={20} /> Add New
            </button>
            <button className="border border-indigo-600 bg-indigo-600 rounded-full py-3 px-6 f text-white text-base font-semibold">
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Creating;