import { useEffect, useRef, useState } from "react";
import close from "../assets/close.png";
import brandInput from "../assets/brand-img.svg";
import camera from "../assets/camera.svg";

const AccountModal = ({ setShowAccount }) => {
  const brandImgRef = useRef();
  const modalBodyRef = useRef();

  const [inputData, setInputData] = useState({});
  // const handleImageChange = (event) => {};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      const file = e.target.files[0];
      if (file) {
        setInputData({ ...inputData, [name]: file });
      }
    } else {
      setInputData({ ...inputData, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalBodyRef.current &&
        !modalBodyRef.current.contains(event.target)
      ) {
        setShowAccount(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="fixed top-0 z-50 h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      <div
        ref={modalBodyRef}
        className="max-w-[640px] w-full bg-white text-black p-10 rounded-2xl relative"
      >
        <div
          onClick={() => setShowAccount(false)}
          className="absolute top-5 right-5 "
        >
          <button>
            <img src={close} alt="" />
          </button>
        </div>
        <p className="text-2xl font-semibold mb-10">Account Settings</p>
        <form onSubmit={handleSubmit}>
          <div onClick={() => brandImgRef.current.click()} className="relative">
            <input
              type="file"
              onChange={handleInputChange}
              ref={brandImgRef}
              className="hidden"
              accept="image/*"
              name="image"
            />

            <img
              className="w-[120px] h-[120px] rounded-full mb-6 cursor-pointer object-contain"
              src={
                inputData?.image
                  ? URL.createObjectURL(inputData?.image)
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
            <label className="block text-sm font-semibold mb-2.5">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              className="border w-full px-4 py-3.5 rounded-lg"
              required
            />
          </div>
          <div className="mb-10">
            <label className="block text-sm font-semibold mb-2.5">Email</label>
            <input
              type="text"
              name="email"
              className="border w-full px-4 py-3.5 rounded-lg"
              required
              onChange={handleInputChange}
            />
          </div>
          <button
            disabled={
              !inputData?.image || !inputData?.name || !inputData?.email
            }
            type="submit"
            className={`w-full rounded-full bg-indigo-600 disabled:bg-[#A7A3F2] text-white text-base font-semibold px-6 py-3`}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountModal;
