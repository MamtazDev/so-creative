import { useEffect, useState } from "react";
import FirstBrand from "../../components/UserPanel/BrandKit/FirstBrand";
import BrandGuidelines from "../../components/UserPanel/BrandKit/BrandGuidelines";
import Creating from "../../components/UserPanel/BrandKit/Creating";
import AllBrands from "../../components/UserPanel/BrandKit/AllBrands";

const BrandKit = () => {
  const [step, setStep] = useState(1);

  // all data for brand kit json
  const [allBrandkit, setAllBrandkit] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [brandKitData, setBrandKitData] = useState({})


  const [addNewBrand, setAddNewBrand] = useState(false)

  useEffect(()=> {
    setAllBrandkit([{}])
  }, [])



  return (
    <div className="h-full">
      {/* {step === 1 && <FirstBrand setStep={setStep} />}
      {step === 2 && <BrandGuidelines setStep={setStep} />}
      {step === 3 && <Creating setStep={setStep} />}
      {step === 4 && <AllBrands setStep={setStep} />} */}
    

      {/* <BrandGuidelines setStep={setStep} /> */}
      
      {/* {isLoading && <Creating setStep={setStep} />} */}
      {!isLoading && allBrandkit.length > 0 ? <AllBrands allBrandkit={allBrandkit}  /> : <FirstBrand />}


      {/* <BrandGuidelines setStep={setStep} /> */}


    </div>
  );
};

export default BrandKit;
