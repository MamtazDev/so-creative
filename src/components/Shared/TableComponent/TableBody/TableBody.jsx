/* eslint-disable react/prop-types */
import { CaretRight } from '@phosphor-icons/react';

const TableBody = ({ tableDataInfo, index, handlePopup }) => {
  return (
    <tr
      key={index}
      className="hover:bg-indigo-100 hover:cursor-pointer"
      onClick={handlePopup}>
      <td className="px-4 py-4 border-b  border-[#e5e5e5b3] text-sm">
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

      <td className="px-4 py-4 border-b border-[#e5e5e5b3] text-sm">
        <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
          {tableDataInfo.projectName}
        </p>
      </td>

      <td className="px-4 py-4 border-b border-[#e5e5e5b3] text-sm">
        <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
          {tableDataInfo.duration} days
        </p>
      </td>

      <td className="px-4 py-4 border-b border-[#e5e5e5b3] text-sm">
        <p className="text-sm font-normal text-slate-900 whitespace-no-wrap flex gap-2">
          {tableDataInfo.dateCreated} <CaretRight size={20} />
        </p>
      </td>
    </tr>
  );
};

export default TableBody