/* eslint-disable react/prop-types */
import {
  ArrowUp,
  CaretDown,
  CaretRight,
  FileText,
  PuzzlePiece,
  Question,
} from "@phosphor-icons/react";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link, useLocation } from "react-router-dom";

import {
  MyWorkTableData,
  tableHeading,
  tableHeadingTwo,
} from "../../../utils/data";
import EditorProjectPopUp from "../EditorProjectPopUp/EditorProjectPopUp";

const MyWorkTable = ({ filteredData }) => {
  const [modalPopup, setModalPopup] = useState(false);
  const [jobAction, setJobAction] = useState(false);
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const route = useLocation();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "video/*,image/*",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
      if (acceptedFiles[0].type.startsWith("image/")) {
        setThumbnail(URL.createObjectURL(acceptedFiles[0]));
      }
    },
  });

  const handlePopup = () => {
    setModalPopup(!modalPopup);
  };

  const handeJobAction = () => {
    setJobAction(!jobAction);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

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
                          <p
                            className="text-sm font-semibold text-slate-900 whitespace-no-wrap cursor-pointer"
                            onClick={handlePopup}>
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

            {modalPopup === true && (
              <EditorProjectPopUp
                jobAction={jobAction}
                handlePopup={handlePopup}
                handeJobAction={handeJobAction}
                handleUploadClick={handleUploadClick}
                thumbnail={thumbnail}
                getInputProps={getInputProps}
                file={file}
              />
            )}
          </div>
        </div>
      )}

      {route.pathname === "/editor/all-projects" && (
        <>
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
                  {filteredData.map((tableDataInfo, index) => (
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
                            <p
                              className="text-sm font-semibold text-slate-900 whitespace-no-wrap cursor-pointer"
                              onClick={handlePopup}>
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
                            "text-sm font-normal text-white bg-orange-500 inline p-1 px-3 rounded-full whitespace-no-wrap"
                          } ${
                            tableDataInfo.status === "Approved" &&
                            "text-sm font-normal text-white bg-green-500 inline p-1 px-3 rounded-full whitespace-no-wrap"
                          } ${
                            tableDataInfo.status === "New Project" &&
                            "text-sm font-normal text-white bg-red-500 inline p-1 px-3 rounded-full whitespace-no-wrap"
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

              {modalPopup === true && (
                <EditorProjectPopUp
                  jobAction={jobAction}
                  handlePopup={handlePopup}
                  handeJobAction={handeJobAction}
                  handleUploadClick={handleUploadClick}
                  thumbnail={thumbnail}
                  getInputProps={getInputProps}
                  file={file}
                />
              )}
            </div>
          </div>

          <div className="container mx-auto mt-10 px-4">
            <nav
              className="flex gap-4 flex-row flex-nowrap justify-between md:justify-center items-center"
              aria-label="Pagination">
              <button
                className="flex items-center text-base font-medium border border-slate-200  px-3 py-1 rounded-full gap-2"
                title="Previous">
                <CaretLeft className="text-slate-200" size={16} />
                <span className="text-slate-200">Previous</span>
              </button>
              <div className="flex gap-4">
                <a className="block cursor-pointer border px-3 py-1 rounded-full text-base text-white font-medium bg-indigo-600">
                  1
                </a>
                <a className="block cursor-pointer border border-transparent px-3 py-1 rounded-full text-base font-medium text-[#64748B]">
                  2
                </a>
                <a className="block cursor-pointer border border-transparent px-3 py-1 rounded-full text-base font-medium text-[#64748B]">
                  3
                </a>
                <a className="block cursor-pointer border border-transparent px-3 py-1 rounded-full text-base font-medium text-[#64748B]">
                  ...
                </a>
                <a className="block cursor-pointer border border-transparent px-3 py-1 rounded-full text-base font-medium text-[#64748B]">
                  10
                </a>
              </div>
              <button
                className="flex items-center text-base font-medium border border-indigo-600 px-3 py-1 rounded-full gap-2"
                title="Previous">
                <span className="text-indigo-600">Next</span>
                <CaretRight className="text-indigo-600" size={16} />
              </button>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MyWorkTable;
