import plan from "../../../assets/enterprise-plan.svg";

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

      <p className="text-base font-semibold">Payment Method</p>
      <table className="w-full text-slate-700 text-sm font-normal">
        <tbody>
          <tr>
            <td className="border-b">Payment Method</td>
            <td className="border-b">PayPal</td>
            <td className="border-b text-end">
              <button className="font-semibold text-indigo-600 py-4">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b">Billing Interval</td>
            <td className="border-b">Annually</td>
            <td className="border-b text-end">
              <button className="font-semibold text-indigo-600 py-4">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-b">Name</td>
            <td className="border-b">James</td>
            <td className="border-b text-end">
              <button className="font-semibold text-indigo-600 py-4">
                Edit
              </button>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>james@example.com</td>
            <td className="text-end">
              <button className="font-semibold text-indigo-600 py-4">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeamBilling;
