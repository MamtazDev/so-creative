import { useRef, useState } from "react";
import close from "../assets/close.svg";
import useOutsideClick from "../hooks/useOutsideClick";

const AddColor = ({ modalHandler, setData, nameColor }) => {
  const colorRef = useRef();
  const [color, setColor] = useState("#000000");

  const handleSubmitColor = () => {
    setData((prevState) => ({
      ...prevState,
      [nameColor]: [...(prevState[nameColor] || []), color],
    }));

    modalHandler(false);
  };

  useOutsideClick(colorRef, () => modalHandler(false));

  return (
    <div className="fixed left-0 top-0 z-[9999] h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      <div
        ref={colorRef}
        className="max-w-[540px] w-full bg-white text-black p-10 rounded-2xl relative"
      >
        <button
          onClick={() => modalHandler(false)}
          className="absolute top-5 right-5 "
        >
          <img src={close} alt="" />
        </button>

        <div className="mb-5">
          <label className="block mb-2">Choose color from here</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="rounded-md w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Type here</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md w-full"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={handleSubmitColor}
            className="primary_btn mt-5 "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddColor;
