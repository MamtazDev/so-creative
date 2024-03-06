/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link, useLocation } from "react-router-dom";
import {
  MyWorkTableData,
  clientTableHeading,
  tableHeading,
  tableHeadingTwo,
} from "../../../utils/data";
import EditorProjectPopUp from "../EditorProjectPopUp/EditorProjectPopUp";
import EditorPagination from "./EditorPagination";

const MyWorkTable = ({ filteredData, repeatedData }) => {
  const route = useLocation();
  const [modalPopup, setModalPopup] = useState(false);
  const [jobAction, setJobAction] = useState(false);
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "text/html": [".html", ".htm"],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
        if (acceptedFiles[0].type.startsWith("image/")) {
          setThumbnail(URL.createObjectURL(acceptedFiles[0]));
        } else {
          setThumbnail(null);
        }
      }
    },
  });

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handlePopup = () => {
    setModalPopup(!modalPopup);
  };

  const handeJobAction = () => {
    setJobAction(!jobAction);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = filteredData?.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {route.pathname === "/editor" && (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
          <div className="inline-block min-w-full border border-slate-200 rounded-2xl overflow-hidden">
            <table className="min-w-full leading-normal myworktable">
              <thead>
                <tr>
                  {tableHeading.length > 0 ? (
                    tableHeading.map((tableHadingName, index) => (
                      <th
                        className="px-5 py-3 border-b border-gray-200 text-left text-sm font-semibold text-slate-900 tracking-wider"
                        key={index}>
                        {tableHadingName}
                      </th>
                    ))
                  ) : (
                    <p>There is no data</p>
                  )}
                </tr>
              </thead>

              <tbody>
                {MyWorkTableData.slice(0, 5).map((tableDataInfo, index) => (
                  <tr
                    key={index}
                    className="hover:bg-indigo-100 hover:cursor-pointer"
                    onClick={handlePopup}>
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
                </tr>
              </tbody>
            </table>

            {modalPopup === true && (
              <EditorProjectPopUp
                jobAction={jobAction}
                setModalPopup={setModalPopup}
                handlePopup={handlePopup}
                handeJobAction={handeJobAction}
                handleUploadClick={handleUploadClick}
                thumbnail={thumbnail}
                getInputProps={getInputProps}
                getRootProps={getRootProps}
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
                    {tableHeadingTwo.length > 0 ? (
                      tableHeadingTwo.map((tableHadingName, index) => (
                        <th
                          className="px-5 py-3 border-b border-gray-200 text-left text-sm font-semibold text-slate-900 tracking-wider"
                          key={index}>
                          {tableHadingName}
                        </th>
                      ))
                    ) : (
                      <p>There is no data</p>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {paginatedData.map((tableDataInfo, index) => (
                    <tr
                      key={index}
                      className="hover:bg-indigo-100 hover:cursor-pointer"
                      onClick={handlePopup}>
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
                          {tableDataInfo.projectName}
                        </p>
                      </td>

                      <td className="px-4 py-4 border-b border-[#e5e5e5b3] text-sm">
                        <p className="text-sm font-normal text-slate-900 whitespace-no-wrap">
                          {tableDataInfo.assignee}
                        </p>
                      </td>

                      <td
                        className={
                          "px-4 py-4 border-b border-[#e5e5e5b3] text-sm"
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
                  ))}
                </tbody>
              </table>

              {modalPopup === true && (
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
              )}
            </div>
          </div>

          <EditorPagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            filteredData={filteredData}
            itemsPerPage={itemsPerPage}
            endIndex={endIndex}
          />
        </>
      )}

      {route.pathname === "/editor/clients" && (
        <>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div className="inline-block min-w-full border border-slate-200 rounded-2xl overflow-hidden">
              <table className="min-w-full leading-normal myworktable">
                <thead>
                  <tr>
                    {clientTableHeading.map((tableHadingName, index) => (
                      <th
                        className="px-5 py-3 border-b border-gray-200 text-left text-sm font-semibold text-slate-900 tracking-wider"
                        key={index}>
                        {tableHadingName}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {paginatedData?.map((tableDataInfo, index) => (
                    <tr
                      key={index}
                      className="hover:bg-indigo-100 hover:cursor-pointer"
                      onClick={handlePopup}>
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

                      <td
                        className={
                          "px-4 py-4 border-b border-[#e5e5e5b3] text-sm"
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

                      <td className="px-4 py-4 border-b border-[#e5e5e5b3]  text-sm">
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
                  setModalPopup={setModalPopup}
                  handeJobAction={handeJobAction}
                  handleUploadClick={handleUploadClick}
                  thumbnail={thumbnail}
                  getInputProps={getInputProps}
                  getRootProps={getRootProps}
                  file={file}
                />
              )}
            </div>
          </div>

          <EditorPagination
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            filteredData={filteredData}
            itemsPerPage={itemsPerPage}
            endIndex={endIndex}
          />
        </>
      )}
    </>
  );
};

export default MyWorkTable;
