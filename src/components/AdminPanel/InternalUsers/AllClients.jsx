import React, { useState } from "react";
import EditorPagination from "../../EditorPanel/EditorDashboard/EditorPagination";
import { CaretRight } from "@phosphor-icons/react";
import TableHead from "../../Shared/TableComponent/TableHead/TableHead";
import { clientTableHeading } from "../../../utils/data";

const AllClients = ({ filteredData }) => {
  console.log(filteredData, "filteredData");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData?.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table className="w-full leading-normal myworktable">
        <TableHead tableHeading={clientTableHeading} />

        <tbody>
          {paginatedData?.map((tableDataInfo, index) => (
            <tr
              key={index}
              className="hover:bg-indigo-100 hover:cursor-pointer"
              //   onClick={handlePopup}
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
                    <p className="text-sm font-semibold text-slate-900 whitespace-no-wrap cursor-pointer">
                      {tableDataInfo.clientName}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-4 border-b border-[#e5e5e5b3] text-sm">
                <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                  {tableDataInfo.projectCount}
                </p>
              </td>

              <td className="px-4 py-4 border-b border-[#e5e5e5b3] text-sm">
                <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                  {tableDataInfo.duration} days
                </p>
              </td>

              <td className={"px-4 py-4 border-b border-[#e5e5e5b3] text-sm"}>
                <p
                  className={`${
                    tableDataInfo.status === "In Progress" &&
                    "text-sm font-normal text-white bg-orange-500 inline p-1 px-3 rounded-full whitespace-no-wrap"
                  } ${
                    tableDataInfo.status === "Approved" &&
                    "text-sm font-normal text-white bg-green-500 inline p-1 px-3 rounded-full whitespace-no-wrap"
                  } ${
                    tableDataInfo.status === "New Project" &&
                    "text-sm font-normal text-white bg-red-500 inline p-1 px-3 rounded-full whitespace-no-wrap"
                  }`}
                >
                  {tableDataInfo.status}
                </p>
              </td>

              <td className="px-4 py-4 border-b border-[#e5e5e5b3]  text-sm">
                <p className="text-sm font-normal text-slate-900 whitespace-no-wrap flex gap-2">
                  {tableDataInfo.dateCreated} <CaretRight size={20} />
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditorPagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        filteredData={filteredData}
        itemsPerPage={itemsPerPage}
        endIndex={endIndex}
      />
    </div>
  );
};

export default AllClients;
