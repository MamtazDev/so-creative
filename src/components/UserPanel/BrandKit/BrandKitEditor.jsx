import React, { useEffect, useRef, useState } from "react";
import AddColor from "../../../Modal/AddColor";
import BrandcardInner from "../../../Shared/UserPanel/BrandcardInner";
import BrandcolorInner from "../../../Shared/UserPanel/BrandcolorInner";
import PlusButton from "../../../Shared/UserPanel/PlusButton";
import UploadButton from "../../../Shared/UserPanel/UploadButton";
import BrandKitCommon from "./BrandKitCommon";

const BrandKitEditor = ({ brand, setBrand }) => {
  const [colorModal, setColorModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const guidelineRef = useRef();
  const logoRef = useRef();
  const fontRef = useRef();
  const colorRef = useRef();

  const imageAssetRef = useRef();
  const videoAssetRef = useRef();
  const audioAssetRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;

    console.log("name::", name);
    if (name === "colors") {
      setBrand((prevState) => ({
        ...prevState,
        colors: [...prevState.colors, selectedColor],
      }));
    } else {
      setBrand((prevState) => ({
        ...prevState,
        [name]: [...(prevState[name] || []), file],
      }));
    }
  };

  // console.log(brand, "brand data");
  useEffect(() => {
    // console.log("Brand object updated:", brand);
  }, [brand]);
  return (
    <div className="w-full flex flex-col gap-10 ">
      <div>
        <BrandKitCommon
          title="Brand Guidelines"
          subtitle="Add brand images and custom watermarks and use them across your projects."
          acceptType="application/pdf"
          kitName="brandGuidelines"
          handleChange={handleChange}
          kitRef={guidelineRef}
        />
        {brand?.brandGuidelines?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.brandGuidelines?.map((data, index) => (
              <BrandcardInner
                key={index}
                data={data}
                main={brand.brandGuidelines}
                index={"brandGuidelines"}
                setMain={setBrand}
              />
            ))}
            <PlusButton handleClick={() => guidelineRef.current.click()} />
          </div>
        ) : (
          <UploadButton handleFunction={() => guidelineRef.current.click()} />
        )}
      </div>
      <div>
        <BrandKitCommon
          title="Logos"
          subtitle="Add brand images and custom watermarks and use them across your projects."
          acceptType="image/*"
          kitName="logos"
          handleChange={handleChange}
          kitRef={logoRef}
        />

        {brand?.logos?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.logos?.map((data, index) => (
              <BrandcardInner
                brand={brand}
                main={brand?.logos}
                key={index}
                data={data}
                setMain={setBrand}
                index={"logos"}
              />
            ))}
            <PlusButton handleClick={() => logoRef.current.click()} />
          </div>
        ) : (
          <UploadButton handleFunction={() => logoRef.current.click()} />
        )}
      </div>
      <div>
        <BrandKitCommon
          title="Fonts"
          subtitle="Add brand images and custom watermarks and use them across your projects."
          acceptType=".ttf, .otf, .woff, .woff2"
          kitName="fonts"
          handleChange={handleChange}
          kitRef={fontRef}
        />
        {brand?.fonts?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.fonts?.map((data, index) => (
              <BrandcardInner
                key={index}
                data={data}
                index={"fonts"}
                main={brand?.fonts}
                setMain={setBrand}
              />
            ))}
            <PlusButton handleClick={() => fontRef.current.click()} />
          </div>
        ) : (
          <UploadButton handleFunction={() => fontRef.current.click()} />
        )}
      </div>
      <div>
        <BrandKitCommon
          title="Color Palette"
          subtitle="Add your brand color palettes to maintain brand consistency across your videos"
        />

        {brand?.colorPalette?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.colorPalette?.map((data, index) => (
              <BrandcolorInner
                key={index}
                data={data}
                index={"colorPalette"}
                main={brand?.colorPalette}
                setMain={setBrand}
              />
            ))}
            <PlusButton handleClick={() => setColorModal(true)} />
          </div>
        ) : (
          <UploadButton handleFunction={() => setColorModal(true)} />
        )}
      </div>
      <div>
        <BrandKitCommon
          title="Image Assets"
          subtitle="Add brand images and custom watermarks and use them across your projects."
          acceptType="image/*"
          kitName="imageAssets"
          handleChange={handleChange}
          kitRef={imageAssetRef}
        />
        {brand?.imageAssets?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.imageAssets?.map((data, index) => (
              <BrandcardInner
                key={index}
                data={data}
                index={"imageAssets"}
                main={brand?.imageAssets}
                setMain={setBrand}
              />
            ))}
            <PlusButton handleClick={() => imageAssetRef.current.click()} />
          </div>
        ) : (
          <UploadButton handleFunction={() => imageAssetRef.current.click()} />
        )}
      </div>
      <div>
        <BrandKitCommon
          title="Video Assets"
          subtitle="Add brand videos and custom clips and use them across your projects."
          acceptType="video/*,.mkv"
          kitName="videoAssets"
          handleChange={handleChange}
          kitRef={videoAssetRef}
        />
        {brand?.videoAssets?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.videoAssets?.map((data, index) => (
              <BrandcardInner
                key={index}
                data={data}
                index={"videoAssets"}
                main={brand?.videoAssets}
                setMain={setBrand}
              />
            ))}
            <PlusButton handleClick={() => videoAssetRef.current.click()} />
          </div>
        ) : (
          <UploadButton handleFunction={() => videoAssetRef.current.click()} />
        )}
      </div>
      <div>
        <BrandKitCommon
          title="Audio Assets"
          subtitle="Add custom audio and use them for subtitles and caption in any videos"
          acceptType=".mp3,audio/*"
          kitName="audioAssets"
          handleChange={handleChange}
          kitRef={audioAssetRef}
        />
        {brand?.audioAssets?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.audioAssets?.map((data, index) => (
              <BrandcardInner
                key={index}
                data={data}
                index={"audioAssets"}
                main={brand?.audioAssets}
                setMain={setBrand}
              />
            ))}
            <PlusButton handleClick={() => audioAssetRef.current.click()} />
          </div>
        ) : (
          <UploadButton handleFunction={() => audioAssetRef.current.click()} />
        )}
      </div>
      {colorModal && (
        <AddColor
          setBrand={setBrand}
          setColorModal={setColorModal}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      )}
    </div>
  );
};

export default BrandKitEditor;
