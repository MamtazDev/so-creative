import { gettingStarted } from "../../utils/data";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const GettingStarted = ({ setStep }) => {
  return (
    <div>
      <div
        onClick={() => setStep(1)}
        className="cursor-pointer flex text-indigo-600 items-center gap-3  mb-8"
      >
        <CaretLeft size={24} weight="bold" />
        <p className="text-base font-bold">Getting Started</p>
      </div>
      <div className="flex flex-col gap-4">
        {gettingStarted.length > 0 ? (
          gettingStarted.map((data, index) => (
            <div
              onClick={() => setStep(3)}
              className="border rounded-xl py-3 px-4 flex items-center gap-2 justify-between cursor-pointer"
              key={index}
            >
              <div>
                <p className="mb-2 text-base font-bold ">{data.query}</p>
                <p className="text-sm font-medium">
                  updated {data.time} months ago
                </p>
              </div>
              <CaretRight size={24} weight="bold" />
            </div>
          ))
        ) : (
          <p>There is no data</p>
        )}
      </div>
    </div>
  );
};

export default GettingStarted;
