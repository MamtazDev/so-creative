import React, { useState } from "react";
import { addOns } from "../../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddOrUpdateProjectMutation,
  useGetProjectDetailsQuery,
} from "../../../features/project/projectApi";
import Swal from "sweetalert2";
import {
  setProjectCreating,
  setStep,
} from "../../../features/project/projectSlice";

const SelectAddOns = () => {
  const { projectId } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const [addOrUpdateProject, { isLoading }] = useAddOrUpdateProjectMutation();

  const [projectAddons, setAddProjectOns] = useState([]);
  const { data: projectData } = useGetProjectDetailsQuery(projectId);

  const handleClick = (value) => {
    const isExist = projectAddons.find((i) => i.name === value.title);
    if (isExist) {
      const newProjectAddOns = projectAddons.filter(
        (i) => i.name !== value.title
      );
      setAddProjectOns(newProjectAddOns);
    } else {
      setAddProjectOns([
        ...projectAddons,
        {
          name: value.title,
          description: value.subtitle,
          credit: value.credit,
        },
      ]);
    }
  };

  const handleContinue = async () => {
    dispatch(setProjectCreating(true));
    try {
      const formData = new FormData();

      projectAddons.forEach((element, index) => {
        if (typeof element === "object") {
          Object.keys(element).forEach((elementKey) => {
            const elementValue = element[elementKey];
            formData.append(
              `${"addOns"}[${index}][${elementKey}]`,
              elementValue
            );
          });
        } else {
          formData.append(`${"addOns"}[]`, element);
        }
      });
      formData.append("projectId", projectId);
      formData.append("status", "Pending");
      const res = await addOrUpdateProject(formData);

      if (res?.error?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.error}`,
        });
      }
      if (res?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.data?.message}`,
        });
      }
      if (res?.data?.success) {
        // push("/dashboard");
        dispatch(setStep(3));
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    } finally {
      dispatch(setProjectCreating(false));
    }
  };

  return (
    <div className="max-w-[768px] m-auto">
      <div className="flex flex-col gap-4 mb-4">
        {addOns.map((data, index) => {
          const isChecked =
            projectData?.addOns?.length > 0
              ? projectData?.addOns.find((i) => i.name === data.title)
              : projectAddons.find((i) => i.name === data.title);
          return (
            <div
              key={index}
              className="p-4 border rounded-xl flex items-center gap-2 justify-between cursor-pointer"
              onClick={() => handleClick(data)}
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="accent-indigo-600 w-5 h-5"
                  checked={isChecked}
                />
                <img src={data.pic} alt="" />
                <div>
                  <p className="text-slate-800 mb-1 text-base font-semibold">
                    {data.title}
                  </p>
                  <p className="text-slate-500 font-normal text-xs">
                    {data.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-base font-semibold">
                {data.credit} {data.credit > 1 ? "Credits" : "Credit"}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-xs font-medium text-slate-600 mb-16">
        All add-ons are subject to change once reviewed by our editing team.
        Additional credit charges may apply.
      </p>
      <div className="flex items-center gap-2 justify-between">
        <p className="text-base font-normal">
          Total Project Cost:{" "}
          <span className="font-bold">
            {projectData?.totalCredit !== 0
              ? projectData?.totalCredit.toFixed(1)
              : projectAddons
                  .reduce((total, current) => total + current.credit, 0)
                  .toFixed(1)}{" "}
            <></>
            Credits
          </span>{" "}
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(setStep(1))}
            className=" px-6 py-3 text-base font-semibold text-indigo-600 border rounded-full border-indigo-600"
          >
            Previous Step
          </button>
          <button onClick={() => handleContinue()} className="primary_btn">
            Create New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAddOns;
