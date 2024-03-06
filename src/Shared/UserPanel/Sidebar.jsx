import companyLogo from "../../assets/company-logo.svg";
import createProject from "../../assets/create-project.svg";
import selectDraft from "../../assets/select-draft.svg";
import { Link, useLocation } from "react-router-dom";
import { menus } from "../../utils/data";
import { useState, useRef } from "react";
import { Plus } from "@phosphor-icons/react";
import CreateProjectModal from "../../Modal/CreateProjectModal";
import useOutsideClick from "../../hooks/useOutsideClick";

const Sidebar = () => {
  const location = useLocation();
  const showRef = useRef();
  const [show, setShow] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  useOutsideClick(showRef, () => setShow(false));

  return (
    <aside className="flex-shrink-0 sidebar h-full flex flex-col gap-4 justify-between w-64 pl-6 pr-2 pb-8">
      <div>
        <div className="relative">
          <button
            onClick={() => setShow(!show)}
            className="bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 ease-in flex gap-2 items-center justify-center mb-8 text-base text-white font-semibold rounded-full w-full py-3 px-6 "
          >
            <Plus size={24} />
            New Project
          </button>
          {show && (
            <div
              ref={showRef}
              className="absolute top-14 w-full z-50 bg-white rounded-2xl py-5 px-6"
            >
              <button
                onClick={() => {
                  setShowCreateModal(true);
                  setShow(false);
                }}
                className="flex gap-3.5 items-center text-base font-medium mb-6"
              >
                <img src={createProject} alt="" />
                Create Project
              </button>
              <button className="flex gap-3.5 items-center text-base font-medium">
                <img src={selectDraft} alt="" />
                Select Drafts
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          {menus.length > 0 &&
            menus.map((data, index) => (
              <Link
                to={data.path}
                className={`${
                  location.pathname === data.path
                    ? "active bg-white text-indigo-600"
                    : ""
                } rounded-full py-3 px-6 flex items-center gap-3 text-sm font-semibold hover:bg-white transition-all duration-300 ease-in`}
                key={index}
              >
                <img
                  src={
                    location.pathname === data.path ? data.activePic : data.pic
                  }
                  alt=""
                />
                {data.title}
              </Link>
            ))}
        </div>
      </div>

      <div className="flex gap-3 items-center ">
        <img src={companyLogo} alt="" />
        <div>
          <p className="text-base font-semibold">Company Name</p>
          <p className="text-xs font-normal">Free Plan</p>
        </div>
      </div>
      {showCreateModal && (
        <CreateProjectModal setShowCreateModal={setShowCreateModal} />
      )}
    </aside>
  );
};

export default Sidebar;
