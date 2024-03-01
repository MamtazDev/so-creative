import { useState } from "react";
import FirstBrand from "../../components/UserPanel/BrandKit/FirstBrand";
import BrandGuidelines from "../../components/UserPanel/BrandKit/BrandGuidelines";

const BrandKit = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="h-full">
      {step === 1 && <FirstBrand setStep={setStep} />}
      {step === 2 && <BrandGuidelines setStep={setStep} />}
    </div>
  );
};

export default BrandKit;
