import { guidelines } from "../../../Data/AllDatas";
import BrandUpload from "../../../Shared/UserPanel/BrandUpload";

const BrandGuidelines = () => {
  return (
    <div className="flex flex-col gap-10 ">
      {guidelines.map((data, index) => (
        <BrandUpload
          key={index}
          title={data.title}
          subTitle={data.subtitle}
          buttonName={data.buttonName}
        />
      ))}
    </div>
  );
};

export default BrandGuidelines;
