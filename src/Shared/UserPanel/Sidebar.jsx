import { Notebook, Plus } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CreateProjectModal from "../../Modal/CreateProjectModal";
import companyLogo from "../../assets/company-logo.svg";
import createProject from "../../assets/create-project.svg";
import selectDraft from "../../assets/select-draft.svg";
import useOutsideClick from "../../hooks/useOutsideClick";
import { menus } from "../../utils/data";
import SelectDraft from "../../components/UserPanel/SelectFromDraft/SelectDraft";
import TeamSettingModal from "../../Modal/TeamSettingModal";
import { useDispatch, useSelector } from "react-redux";
import { setShowCreateModal } from "../../features/project/projectSlice";

const Sidebar = () => {
  const location = useLocation();
  const showRef = useRef();
  const [show, setShow] = useState(false);

  const [showDraftModal, setShowDraftModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  useOutsideClick(showRef, () => setShow(false));
  const { showCretedModal } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  return (
    <aside className="flex-shrink-0 sidebar h-full flex flex-col gap-4 justify-between w-64 pl-6 pr-2 pb-8">
      <div>
        <div className="relative">
          <button
            onClick={() => setShow(!show)}
            className=" flex gap-2 items-center justify-center mb-8  w-full primary_btn "
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
                  dispatch(setShowCreateModal(true));
                  setShow(false);
                }}
                className="flex gap-3.5 items-center text-base font-medium mb-6"
              >
                <img src={createProject} alt="" />
                Create Project
              </button>
              <button
                onClick={() => {
                  setShowDraftModal(true);
                  setShow(false);
                }}
                className="flex gap-3.5 items-center text-base font-medium"
              >
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
      <div>
        <button
          className=" rounded-full  py-3 px-6 flex items-center gap-3 text-sm font-semibold hover:bg-white transition-all duration-300 ease-in"
          onClick={() => setShowTeamModal(true)}
        >
          <Notebook size={24} />
          Team Settings
        </button>
        <div className="flex gap-3 items-center border-t pt-5 ">
          <img src={companyLogo} alt="" />
          <div>
            <p className="text-base font-semibold">Company Name</p>
            <p className="text-xs font-normal">Free Plan</p>
          </div>
        </div>
      </div>

      {showCretedModal && <CreateProjectModal />}
      {showDraftModal && <SelectDraft setShowDraftModal={setShowDraftModal} />}
      {showTeamModal && (
        <TeamSettingModal setShowTeamModal={setShowTeamModal} />
      )}
    </aside>
  );
};

export default Sidebar;
