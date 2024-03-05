import { useEffect, useRef, useState } from "react";
import close from "../assets/close.svg";
import brandInput from "../assets/brand-img.svg";
import camera from "../assets/camera.svg";
import verifyEmail from "../assets/verify-email.svg";
import { Link } from "react-router-dom";
import useOutsideClick from "../hooks/useOutsideClick";

const AccountModal = ({ setShowAccount }) => {
  const [inputData, setInputData] = useState({});
  const brandImgRef = useRef();
  const modalBodyRef = useRef();

  const [step, setStep] = useState(1);

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
    setStep(2);
  };

  useOutsideClick(modalBodyRef, () => setShowAccount(false));

  return (
    <div className="fixed top-0 z-50 h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      <div
        ref={modalBodyRef}
        className="max-w-[640px] w-full bg-white text-black p-10 rounded-2xl relative"
      >
        <div>
          <button
            onClick={() => setShowAccount(false)}
            className="absolute top-5 right-5 "
          >
            <img src={close} alt="" />
          </button>
        </div>

        {step === 1 && (
          <div>
            <p className="text-2xl font-semibold mb-10">Account Settings</p>
            <form onSubmit={handleSubmit}>
              <div
                onClick={() => brandImgRef.current.click()}
                className="relative"
              >
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
                <label className="block text-sm font-semibold mb-2.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  className="border w-full px-4 py-3.5 rounded-lg"
                  required
                />
              </div>
              <div className="mb-10">
                <label className="block text-sm font-semibold mb-2.5">
                  Email
                </label>
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
        )}
        {step === 2 && (
          <div className="text-center">
            <img className="mx-auto mb-10" src={verifyEmail} alt="" />
            <p className="text-4xl font-bold mb-3">Verify Email</p>
            <p className="text-lg text-slate-500 font-normal mb-10">
              We have sent you a link at your new email address to verify the
              email changes.{" "}
            </p>
            <Link
              to="/user"
              onClick={() => setShowAccount(false)}
              className={`w-full rounded-full bg-indigo-600  text-white text-base font-semibold px-6 py-3`}
            >
              Return Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountModal;
