import { useState } from "react";
import plan from "../../../assets/enterprise-plan.svg";
import PaymentDetails from "./PaymentDetails";
import Invoice from "./Invoice";

const TeamBilling = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <p className="text-base text-semibold mb-4">Team Billing</p>
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setActive(1)}
          className={`${
            active === 1 ? "primary_btn" : "bg-transparent text-indigo-600"
          }  py-2 px-4 border border-indigo-600 rounded-full text-base font-semibold `}
        >
          Overview
        </button>
        <button
          onClick={() => setActive(2)}
          className={`${
            active === 2 ? "primary_btn" : "bg-transparent text-indigo-600"
          }  py-2 px-4 border border-indigo-600 rounded-full text-base font-semibold `}
        >
          Invoices
        </button>
      </div>

      {active === 1 ? (
        <>
          <div className="bg-slate-900 rounded-2xl p-6 text-white mb-6">
            <div className="flex items-center gap-4 justify-between mb-4">
              <img src={plan} alt="" />
              <button className=" rounded-full px-[18px] py-1.5 text-base font-semibold ">
                Pro Plan
              </button>
            </div>
            <p className="text-lg font-semibold mb-2">A$384.44/year</p>
            <p className="text-slate-100 font-normal text-sm mb-4">
              Subscription will renew on April 26, 2024
            </p>
            <button className="bg-white rounded-full text-slate-900 text-base font-semibold w-full py-1.5 px-4">
              Upgrade
            </button>
          </div>
          <PaymentDetails />
        </>
      ) : (
        <Invoice />
      )}
    </div>
  );
};

export default TeamBilling;
