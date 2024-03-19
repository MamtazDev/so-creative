import { useEffect } from "react";
import CreatingBrand from "../../../Shared/UserPanel/CreatingBrand";
import created from "../../../assets/created.svg";
import { setStep } from "../../../features/project/projectSlice";
import useLoading from "../../../hooks/useLoading";
import { Plus } from "@phosphor-icons/react";

const Creating = ({ isLoading }) => {
  useEffect(() => {}, [isLoading])
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {isLoading === "loading" &&
        <CreatingBrand title="Creating your brand..." />
      }

    </div>
  );
};

export default Creating;
