import { DownloadSimple } from "@phosphor-icons/react";
import React from "react";

const Invoice = () => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="text-sm font-semibold">
            <td className="p-4 ">Bill Date</td>
            <td>Amount</td>
            <td>Amount</td>
            <td></td>
          </tr>
        </thead>
        <tbody className="text-sm font-normal">
          <tr>
            <td className="p-4 border-t">October 1, 2023</td>
            <td className=" border-t">A$384.00</td>
            <td className=" border-t">Paid</td>
            <td className=" border-t">
              <DownloadSimple
                className="text-indigo-600 cursor-pointer"
                size={20}
                weight="bold"
              />
            </td>
          </tr>
          <tr>
            <td className="p-4 border-t">September 1, 2023</td>
            <td className=" border-t">A$40.00</td>
            <td className=" border-t">Paid</td>
            <td className=" border-t">
              <DownloadSimple
                className="text-indigo-600 cursor-pointer"
                size={20}
                weight="bold"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
