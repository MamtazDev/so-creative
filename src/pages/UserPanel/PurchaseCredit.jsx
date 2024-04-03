import React from "react";

const PurchaseCredit = () => {
  return (
    <div className="max-w-[475px] m-auto mt-12">
      <div className="mb-4">
        <label className="text-sm text-[#4F5B76] block mb-1">Card number</label>
        <input
          className="border rounded-md shadow-md p-2 w-full"
          type="number"
          placeholder="1234 1234 1234 1234"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-[#4F5B76] block mb-1">Expiry</label>
          <input
            className="border rounded-md shadow-md p-2 w-full"
            type="date"
            placeholder="1234 1234 1234 1234"
          />
        </div>
        <div>
          <label className="text-sm text-[#4F5B76] block mb-1">CVC</label>
          <input
            className="border rounded-md shadow-md p-2 w-full"
            type="text"
            placeholder="CVC"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm text-[#4F5B76] block mb-1">Country</label>

          <select className="border rounded-md shadow-md p-2 w-full">
            <option>United States</option>
            <option>Bangladesh</option>
            <option>Soudi Arabia</option>
            <option>Bhutan</option>
            <option>Nepal</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-[#4F5B76] block mb-1">
            Postal code
          </label>
          <input
            className="border rounded-md shadow-md p-2 w-full"
            type="number"
            placeholder="90210"
          />
        </div>
      </div>
      <button className="bg-indigo-600 rounded-full text-base font-semibold text-white px-6 py-3">
        Proceed to pay
      </button>
    </div>
  );
};

export default PurchaseCredit;
