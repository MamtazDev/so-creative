import { CaretRight } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
import {
  MyWorkTableData,
  tableHeading,
  tableHeadingTwo,
} from "../../../utils/data";

const MyWorkTable = () => {
  const route = useLocation();

  return (
    <>
      {route.pathname === "/editor" && (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
          <div className="inline-block min-w-full border border-slate-200 rounded-2xl overflow-hidden">
            <table className="min-w-full leading-normal myworktable">
              <thead>
                <tr>
                  {tableHeading.map((tableHadingName, index) => (
                    <th
                      className="px-5 py-3 border-b border-gray-200 text-left text-sm font-semibold text-slate-900 tracking-wider"
                      key={index}>
                      {tableHadingName}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {MyWorkTableData.map((tableDataInfo, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8">
                          <img
                            className="w-full h-full rounded-full"
                            src={tableDataInfo.clientImg}
                            alt="img"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-semibold text-slate-900 whitespace-no-wrap">
                            {tableDataInfo.clientName}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                      <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                        {tableDataInfo.projectName}
                      </p>
                    </td>

                    <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                      <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                        {tableDataInfo.duration} days
                      </p>
                    </td>

                    <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                      <p className="text-sm font-normal text-slate-900 whitespace-no-wrap flex gap-2">
                        {tableDataInfo.dateCreated} <CaretRight size={20} />
                      </p>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm"></td>

                  <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                    <Link
                      to={"/editor/all-projects"}
                      className="text-sm font-semibold text-indigo-600 flex justify-center items-center gap-3">
                      All Projects <CaretRight size={20} />
                    </Link>
                  </td>

                  <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm"></td>

                  <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {route.pathname === "/editor/all-projects" && (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
          <div className="inline-block min-w-full border border-slate-200 rounded-2xl overflow-hidden">
            <table className="min-w-full leading-normal myworktable">
              <thead>
                <tr>
                  {tableHeadingTwo.map((tableHadingName, index) => (
                    <th
                      className="px-5 py-3 border-b border-gray-200 text-left text-sm font-semibold text-slate-900 tracking-wider"
                      key={index}>
                      {tableHadingName}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {MyWorkTableData.map((tableDataInfo, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8">
                          <img
                            className="w-full h-full rounded-full"
                            src={tableDataInfo.clientImg}
                            alt="img"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-semibold text-slate-900 whitespace-no-wrap">
                            {tableDataInfo.clientName}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                      <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                        {tableDataInfo.projectName}
                      </p>
                    </td>

                    <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                      <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                        {tableDataInfo.assignee}
                      </p>
                    </td>

                    <td
                      className={
                        "px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm"
                      }>
                      <p
                        className={`${
                          tableDataInfo.status === "In Progress" &&
                          "text-sm font-normal text-white bg-orange-500 inline p-1 rounded-full whitespace-no-wrap"
                        }`}>
                        {tableDataInfo.status}
                      </p>
                    </td>

                    <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                      <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                        {tableDataInfo.duration} days
                      </p>
                    </td>

                    <td className="px-4 py-4 border-b border-[#e5e5e5b3] bg-white text-sm">
                      <p className="text-sm font-normal text-slate-900 whitespace-no-wrap flex gap-2">
                        {tableDataInfo.dateCreated} <CaretRight size={20} />
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default MyWorkTable;
