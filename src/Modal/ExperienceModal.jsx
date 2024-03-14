import React, { useRef, useState } from "react";
import close from "../assets/close.svg";
import useOutsideClick from "../hooks/useOutsideClick";

const ExperienceModal = ({ setShowExperienceModal }) => {
  const [rating, setRating] = useState(0); // Initially no stars selected

  const experienceRef = useRef();
  useOutsideClick(experienceRef, () => setShowExperienceModal(false));
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };
  return (
    <div className="fixed left-0 top-0 z-[9999] h-screen w-full bg-[#00000080] backdrop-blur-xl flex items-center justify-center">
      <div
        ref={experienceRef}
        className="max-w-[448px] max-h-[90vh] overflow-y-auto no_scrollbar w-full bg-white text-black p-10 rounded-2xl relative"
      >
        <button
          onClick={() => setShowExperienceModal(false)}
          className="absolute top-5 right-5 "
        >
          <img src={close} alt="" />
        </button>
        <form>
          <p className="text-black font-semibold text-2xl mb-4 text-center">
            How was your experience?
          </p>
          <div className="flex items-center justify-center mb-10">
            {[1, 2, 3, 4, 5].map((star) => (
              <p
                key={star}
                onClick={() => handleStarClick(star)}
                className={`${
                  star <= rating ? "text-amber-400" : "text-slate-200"
                } text-5xl cursor-pointer`}
              >
                &#9733;
              </p>
            ))}
          </div>
          <div className="mb-6">
            <label className="text-sm font-semibold mb-2.5 block">
              What did you like?
            </label>
            <textarea
              className="border w-full px-4 py-3.5 rounded-lg"
              rows="5"
              placeholder="Start typing here..."
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="text-sm font-semibold mb-2.5 block">
              What can we improve
            </label>
            <textarea
              className="border w-full px-4 py-3.5 rounded-lg"
              rows="5"
              placeholder="Start typing here..."
            ></textarea>
          </div>
          <button className="primary_btn w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ExperienceModal;
