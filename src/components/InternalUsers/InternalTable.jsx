import { CaretRight } from "@phosphor-icons/react";
import { internalTableHeading, internalUserData } from "../../utils/data";
import TableHead from "../Shared/TableComponent/TableHead/TableHead";

const InternalTable = () => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
      <table className="min-w-full leading-normal myworktable">
        <TableHead tableHeading={internalTableHeading} />

        <tbody>
          {internalUserData?.map((tableDataInfo, index) => (
            <tr
              key={index}
              className="hover:bg-indigo-100 hover:cursor-pointer"
            >
              <td className="px-4 py-4 border-b border-[#e5e5e5b3] text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8">
                    <img
                      className="w-full h-full rounded-full"
                      src={tableDataInfo.clientImg}
                      alt="img"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-slate-900 whitespace-no-wrap cursor-pointer mb-1">
                      {tableDataInfo.clientName}
                    </p>
                    <p className="text-slate-500 text-xs font-normal">
                      {" "}
                      {tableDataInfo.clientName}@gmail.com
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-4 border-b border-[#e5e5e5b3] text-sm">
                <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                  {tableDataInfo.joined}
                </p>
              </td>

              <td className="px-4 py-4 border-b border-[#e5e5e5b3] text-sm">
                <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                  {tableDataInfo.lastActive}
                </p>
              </td>

              <td className="px-4 py-4 border-b border-[#e5e5e5b3]  text-sm">
                <select className="w-full rounded-xl bg-slate-100 py-2 px-3">
                  <option selected>{tableDataInfo.role}</option>
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Account Manager</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InternalTable;
