import { useRef, useState } from "react";
import { guidelines } from "../../../Data/AllDatas";
import BrandUpload from "../../../Shared/UserPanel/BrandUpload";
import brand from "../../../assets/brand-img.svg";
import camera from "../../../assets/camera.svg";

const BrandGuidelines = () => {
  const brandImgRef = useRef();
  const [brandImg, setBrandImg] = useState(null);
  const [description, setDescription] = useState("");
  const maxLength = 500;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBrandImg(file);
    }
  };

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    setDescription(inputValue);
  };

  return (
    <form className="flex items-start justify-between gap-10">
      <div className="flex flex-col gap-10 ">
        {guidelines.map((data, index) => (
          <BrandUpload
            key={index}
            title={data.title}
            subTitle={data.subtitle}
            buttonName={data.buttonName}
          />
        ))}
      </div>
      <div className="max-w-[584px] w-full border rounded-3xl p-10">
        <div onClick={() => brandImgRef.current.click()} className="relative">
          <input
            type="file"
            onChange={handleImageChange}
            ref={brandImgRef}
            className="hidden"
            accept="image/*"
          />

          <img
            className="w-[120px] h-[120px] rounded-full mb-6 cursor-pointer"
            src={brandImg ? URL.createObjectURL(brandImg) : brand}
            alt=""
          />
          <img
            className="absolute translate-y-[-50%] top-[50%] left-[44px]"
            src={camera}
            alt=""
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2.5">
            Brand Name
          </label>
          <input
            type="text"
            className="border w-full px-4 py-3.5 rounded-lg"
            placeholder="Enter your brand name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2.5">
            Description
          </label>

          <textarea
            cols="30"
            rows="5"
            className="border w-full px-4 py-3.5 rounded-lg"
            placeholder="Tell us more about your brand"
            value={description}
            onChange={handleDescriptionChange}
            maxLength={maxLength}
          ></textarea>
          <p className="text-slate-500 text-sm font-normal text-end">
            {description.length}/{maxLength} Characters
          </p>
        </div>
        <button className="w-full rounded-full bg-indigo-600 text-white text-base font-semibold px-6 py-3">
          Save Brand
        </button>
      </div>
    </form>
  );
};

export default BrandGuidelines;
