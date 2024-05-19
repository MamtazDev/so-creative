import { Plus } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import brandInput from "../../../assets/brand-img.svg";
import camera from "../../../assets/camera.svg";
import created from "../../../assets/created.svg";
import {
  useCreateBrandMutation,
  useUpdateBrandMutation,
} from "../../../features/brand-kit/brandKitApi";
import BrandKitEditor from "./BrandKitEditor";
import Creating from "./Creating";

const BrandGuidelines = ({ databaseData = false }) => {
  const maxLength = 500;
  const navigate = useNavigate();

  const [data, setData] = useState(
    databaseData || {
      brandName: "",
      brandDescription: "",
      brandLogo: null,
      brandGuidelines: [],
      logos: [],
      fonts: [],
      colorPalette: [],
      imageAssets: [],
      videoAssets: [],
      audioAssets: [],
    }
  );

  const [createBrand] = useCreateBrandMutation();
  const [updateBrand] = useUpdateBrandMutation();
  const [isLoading, setIsLoading] = useState(false);
  const brandImgRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading("loading");

    const formData = new FormData();

    formData.append("brandName", data.brandName);
    formData.append("brandDescription", data.brandDescription);
    formData.append("brandLogo", data.brandLogo);

    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) {
        value.forEach((el) => {
          formData.append(`brand[${key}]`, el);
        });
      }
    }

    const result = !databaseData
      ? await createBrand(formData)
      : await updateBrand(formData);

    if (result?.data?.success) {
      setIsLoading("done");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${result?.error?.error}`,
      });
      setIsLoading(false);
      console.log(result);
    }
  };

  return (
    <>
      {isLoading === "loading" && <Creating isLoading={isLoading} />}
      {isLoading === false && (
        <form
          onSubmit={handleSubmit}
          className="flex items-start justify-between gap-10 "
        >
          <div className="w-1/2 flex flex-col gap-10 ">
            <BrandKitEditor data={data} setData={setData} />
          </div>
          <div className="max-w-[584px] w-full border rounded-3xl p-10 fixed right-16">
            <div
              onClick={() => brandImgRef.current.click()}
              className="relative"
            >
              <input
                type="file"
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    brandLogo: e.target.files[0],
                  }));
                }}
                ref={brandImgRef}
                className="absolute top-1/2 opacity-0"
                accept="image/*"
                required={data.brandLogo ? false : true}
              />
              <img
                className="w-[120px] h-[120px] rounded-full mb-6 cursor-pointer object-cover"
                src={
                  typeof data.brandLogo === "object" && data.brandLogo !== null
                    ? URL.createObjectURL(data.brandLogo)
                    : typeof data.brandLogo === "string"
                    ? data.brandLogo
                    : brandInput
                }
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
                value={data.brandName}
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    brandName: e.target.value,
                  }));
                }}
                className="border w-full px-4 py-3.5 rounded-lg"
                placeholder="Enter your brand name"
                required={true}
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
                value={data.brandDescription}
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    brandDescription: e.target.value,
                  }));
                }}
                maxLength={maxLength}
                required={true}
              ></textarea>
              <p className="text-slate-500 text-sm font-normal text-end">
                {data.brandDescription.length}/{maxLength} Characters
              </p>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-indigo-600 text-white text-base font-semibold px-6 py-3"
            >
              Save Brand
            </button>
          </div>
        </form>
      )}

      {isLoading === "done" && (
        <div className="h-full flex flex-col items-center justify-center">
          <Confetti recycle={false} />

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
              <button
                onClick={() => setIsLoading(false)}
                className="border border-indigo-600 rounded-full py-3 px-6 flex items-center gap-2 text-indigo-600 text-base font-semibold"
              >
                <Plus size={20} weight="bold" /> Add New
              </button>
              <button
                onClick={() => navigate("/user/brand-kit")}
                className="border border-indigo-600 bg-indigo-600 rounded-full py-3 px-6 f text-white text-base font-semibold"
              >
                Continue
              </button>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default BrandGuidelines;
