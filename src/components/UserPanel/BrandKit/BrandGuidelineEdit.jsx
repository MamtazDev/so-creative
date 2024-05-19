import { useParams } from "react-router-dom";
import Loading from "../../../Shared/Loading";
import { useGetBrandKitQuery } from "../../../features/brand-kit/brandKitApi";
import BrandGuidelines from "./BrandGuidelines";

const BrandGuidelineEdit = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBrandKitQuery(id);

  if (isLoading) {
    return (
      <div className="h-full">
        <Loading />
      </div>
    );
  }
  return (
    <div className="h-full">
      <BrandGuidelines databaseData={data.data} />
    </div>
  );
};

export default BrandGuidelineEdit;
