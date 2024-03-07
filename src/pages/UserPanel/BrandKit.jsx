import { useState } from "react";
import FirstBrand from "../../components/UserPanel/BrandKit/FirstBrand";
import BrandGuidelines from "../../components/UserPanel/BrandKit/BrandGuidelines";
import Creating from "../../components/UserPanel/BrandKit/Creating";

const BrandKit = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="h-full">
      {step === 1 && <FirstBrand setStep={setStep} />}
      {step === 2 && <BrandGuidelines setStep={setStep} />}
      {step === 3 && <Creating setStep={setStep} />}
    </div>
  );
};

export default BrandKit;
