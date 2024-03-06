import { CaretRight } from "@phosphor-icons/react";
import { internalTableHeading, internalUserData } from "../../utils/data";
import TableHead from "../Shared/TableComponent/TableHead/TableHead";

const InternalTable = () => {
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
      <div className="inline-block min-w-full border border-slate-200 rounded-2xl overflow-hidden">
        <table className="min-w-full leading-normal myworktable">
          <TableHead tableHeading={internalTableHeading} />

          <tbody>
            {internalUserData?.map((tableDataInfo, index) => (
              <tr
                key={index}
                className="hover:bg-indigo-100 hover:cursor-pointer">
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

                <td className="px-4 py-4 border-b border-[#e5e5e5b3]  text-sm">
                  <p className="text-sm font-normal text-slate-900 whitespace-no-wrap flex gap-2">
                    {tableDataInfo.dateCreated} <CaretRight size={20} />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* {modalPopup === true && (
          <EditorProjectPopUp
            jobAction={jobAction}
            handlePopup={handlePopup}
            setModalPopup={setModalPopup}
            handeJobAction={handeJobAction}
            handleUploadClick={handleUploadClick}
            thumbnail={thumbnail}
            getInputProps={getInputProps}
            getRootProps={getRootProps}
            file={file}
          />
        )} */}
      </div>
    </div>
  );
};

export default InternalTable;