import { useState } from "react";
import avater from "../../../assets/avater.svg";
import MoreBtn from "./MoreBtn";

const AllAvater = () => {
  const [selectedAveter, setSelectedAveter] = useState([]);
  const handleSelected = (index) => {
    if (selectedAveter.includes(index)) {
      const newAveter = selectedAveter.filter((i) => i !== index);
      setSelectedAveter(newAveter);
    } else {
      setSelectedAveter([...selectedAveter, index]);
    }
  };
  return (
    <div>
      <p className="text-xl font-bold mb-6">AI Avatars</p>
      <div className="flex items-center gap-6">
        {[1, 2, 3, 4, 5].map((data, index) => (
          <div
            onClick={() => handleSelected(index)}
            className={`${
              selectedAveter.includes(index)
                ? " border-indigo-600"
                : "border-transparent"
            } rounded-xl overflow-hidden border`}
            key={index}
          >
            <img src={avater} alt="" />
          </div>
        ))}
        <MoreBtn />
      </div>
    </div>
  );
};

export default AllAvater;
