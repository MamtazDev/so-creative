import { Plus } from "@phosphor-icons/react";
import { useState } from "react";

const FirstBrand = ({ setStep }) => {
  const [allBrandKit, setAllBrandKit] = useState([])




  return (
    <>
      {allBrandKit ? <div className="flex flex-col justify-center items-center h-full">
        <p className="text-xl font-bold mb-2">Create Your First Brand</p>
        <p className="text-slate-500 text-sm font-normal mb-6">
          This information allows you to create videos faster <br /> and maintain
          consistency across your content.
        </p>
        <button
          onClick={() => setStep(2)}
          className="flex items-center gap-2 primary_btn"
        >
          <Plus size={24} /> Create
        </button>
      </div>: <p>{allBrandKit} are brand kit list</p>}
    </>
  );
};

export default FirstBrand;
