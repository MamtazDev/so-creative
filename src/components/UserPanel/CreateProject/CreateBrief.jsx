import React, { useState } from "react";
import FromLabel from "./FromLabel";
import ExpandInputTitle from "./ExpandInputTitle";
import { expandsDetails } from "../../../utils/data";

const CreateBrief = () => {
  const [activeItems, setActiveItems] = useState([]);

  const handleOpenItem = (index) => {
    if (activeItems.includes(index)) {
      const newItems = activeItems.filter((i) => i !== index);
      setActiveItems(newItems);
    } else {
      setActiveItems([...activeItems, index]);
    }
  };
  return (
    <div className="max-w-[640px] w-full m-auto ">
      <form>
        <div className="border rounded-xl p-6 mb-6">
          <div className="mb-8">
            <FromLabel
              title="Project Title *"
              subtitle="eg. Sales Training Video"
            />
            <input className="brief_input" type="text" />
          </div>
          <div className="mb-8">
            <FromLabel
              title="Video Type *"
              subtitle="Choose the type of video you are interested in."
            />
            <select className="brief_input">
              <option selected>Please Select</option>
              <option value="mp4">MP4</option>
              <option value="mov">MOV</option>
            </select>
          </div>
          <div className="mb-8">
            <FromLabel
              title="Video Duration *"
              subtitle="Select the duration of the video that suits your preferences."
            />
            <select className="brief_input">
              <option selected>Under 5 mins</option>
              <option value="mp4">Under 10 mins</option>
              <option value="mov">Under 15 mins</option>
            </select>
          </div>
          <button className="primary_btn ">Continue</button>
        </div>
        <div className="flex flex-col gap-6 items-center">
          {expandsDetails.map((data, index) => (
            <div className="w-full" key={index}>
              <div
                className="cursor-pointer"
                onClick={() => handleOpenItem(index)}
              >
                {!activeItems.includes(index) && (
                  <ExpandInputTitle title={data.title} />
                )}
              </div>
              {activeItems.includes(index) && <div>{data.component}</div>}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CreateBrief;
