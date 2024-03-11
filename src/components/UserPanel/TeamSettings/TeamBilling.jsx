import plan from "../../../assets/enterprise-plan.svg";
import PaymentDetails from "./PaymentDetails";

const TeamBilling = () => {
  return (
    <div>
      <p className="text-base text-semibold mb-4">Team Billing</p>
      <div className="flex items-center gap-3 mb-6">
        <button className="primary_btn py-2 px-4 border border-indigo-600">
          Overview
        </button>
        <button className="text-base font-semibold py-2 px-4 text-indigo-600 border border-indigo-600 rounded-full">
          Invoices
        </button>
      </div>
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
    </div>
  );
};

export default TeamBilling;
