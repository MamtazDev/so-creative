/* eslint-disable react/prop-types */
import {
  CaretDown,
  CaretRight,
  FileText,
  PuzzlePiece,
} from "@phosphor-icons/react";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { Link, useLocation } from "react-router-dom";
import imgOne from "../../../assets/editor_panel/profile_profile.svg";
import {
  MyWorkTableData,
  tableHeading,
  tableHeadingTwo,
} from "../../../utils/data";
import { useState } from "react";

const MyWorkTable = ({ filteredData }) => {
  const route = useLocation();
  const [modalPopup, setModalPopup] = useState(false);
  const handlePopup = () => {
    setModalPopup(!modalPopup);
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
              <div className="absolute top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm">
                <div className="flex justify-center items-center h-screen">
                  <div className="w-[1150px] bg-white rounded-3xl">
                    <div className="modal_header border-b border-b-black/10 p-6 flex justify-between items-center">
                      <div className="project_info flex gap-3">
                        <div className="left">
                          <img src={imgOne} alt="profile" />
                        </div>
                        <div className="right">
                          <h2 className="text-slate-900 text-lg font-semibold flex gap-3 items-center">
                            Sales Strategies Video Series
                            <span className="bg-red-500 rounded-md text-white py-[2px] px-[6px] text-xs font-semibold">
                              New Project
                            </span>
                          </h2>
                          <p className="text-slate-600 text-sm font-normal">
                            Created September 1, 2023
                          </p>
                        </div>
                      </div>
                      <div className="project_action flex gap-3">
                        <button
                          onClick={handlePopup}
                          className="text-base font-semibold text-red-600 border border-red-600 py-3 px-6 rounded-full">
                          Decline Job
                        </button>
                        <button className="text-base font-semibold text-white bg-indigo-600 border border-indigo-600 py-3 px-6 rounded-full">
                          Accept Job
                        </button>
                      </div>
                    </div>
                    <div className="modal_description p-10">
                      <div className="left">
                        <div className="project_brief_wrapper pb-10">
                          <div className="section_head pb-4">
                            <h2 className="text-slate-900 text-lg font-semibold flex items-center gap-2">
                              <FileText size={24} className="text-indigo-600" />
                              Project Brief
                            </h2>
                          </div>
                          <div className="project_brief border border-slate-200 rounded-3xl">
                            <div className="project_des p-6 border-b border-b-slate-200">
                              <p className="text-slate-800 text-xs font-normal pb-4">
                                This project aims to create a video series
                                focusing on impactful sales strategies for
                                businesses of all sizes. The series will
                                leverage your on-demand video editing service to
                                showcase its capabilities and attract potential
                                clients, while providing valuable and actionable
                                sales advice.
                              </p>

                              <p className="text-slate-800 text-xs font-normal">
                                To achieve your project goals, a multifaceted
                                approach blending content marketing, social
                                media engagement, and strategic partnerships is
                                essential. Crafting informative blog posts,
                                videos, and social media content showcasing the
                                benefits of your on-demand video editing service
                                will help increase brand awareness and position
                                your company as thought l...
                              </p>
                            </div>
                            <div className="see_more flex justify-center py-4">
                              <button className="text-indigo-600 text-sm font-semibold flex items-center gap-2">
                                Show More
                                <CaretDown
                                  size={20}
                                  className="text-indigo-600 text-sm font-semibold"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="addons_wrapper pb-10">
                          <div className="section_head pb-4">
                            <h2 className="text-slate-900 text-lg font-semibold flex items-center gap-2">
                              <PuzzlePiece
                                size={24}
                                className="text-indigo-600"
                              />
                              Add-Ons
                            </h2>
                          </div>

                          <div className="addons_items p-4 border-b border-b-slate-100">

                          </div>

                          <div className="addons_bottom rounded-3xl"></div>
                        </div>
                      </div>
                      <div className="right"></div>
                    </div>
                  </div>
                </div>
              </div>
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
