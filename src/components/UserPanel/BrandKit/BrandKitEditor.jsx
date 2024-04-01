import React, { useEffect, useRef, useState } from "react";
import UploadButton from "../../../Shared/UserPanel/UploadButton";
import BrandcardInner from "../../../Shared/UserPanel/BrandcardInner";
import PlusButton from "../../../Shared/UserPanel/PlusButton";
import BrandKitCommon from "./BrandKitCommon";
import AddColor from "../../../Modal/AddColor";

const BrandKitEditor = () => {
  const [brand, setBrand] = useState({});
  const [colorModal, setColorModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const guidelineRef = useRef();
  const logoRef = useRef();
  const fontRef = useRef();

  const imageAssetRef = useRef();
  const videoAssetRef = useRef();
  const audioAssetRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
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

  console.log(brand, "brand data");
  useEffect(() => {
    console.log("Brand object updated:", brand);
  }, [brand]);
  return (
    <div className="w-full flex flex-col gap-10 ">
      <div>
        <BrandKitCommon
          title="Brand Guidelines"
          subtitle="Add brand images and custom watermarks and use them across your projects."
          acceptType="application/pdf"
          kitName="guidelines"
          handleChange={handleChange}
          kitRef={guidelineRef}
        />
        {brand?.guidelines?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.guidelines?.map((data, index) => (
              <BrandcardInner key={index} data={data} />
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
          acceptType="image/svg+xml"
          kitName="logos"
          handleChange={handleChange}
          kitRef={logoRef}
        />

        {brand?.logos?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.logos?.map((data, index) => (
              <BrandcardInner
                main={brand?.logos}
                key={index}
                data={data}
                setMain={setBrand}
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
              <BrandcardInner key={index} data={data} />
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

        {brand?.colors?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {brand?.colors?.map((data, index) => (
              <BrandcardInner key={index} data={data} />
            ))}
            <PlusButton />
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
              <BrandcardInner key={index} data={data} />
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
              <BrandcardInner key={index} data={data} />
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
              <BrandcardInner key={index} data={data} />
            ))}
            <PlusButton handleClick={() => audioAssetRef.current.click()} />
          </div>
        ) : (
          <UploadButton handleFunction={() => audioAssetRef.current.click()} />
        )}
      </div>
      {colorModal && (
        <AddColor
          setColorModal={setColorModal}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      )}
    </div>
  );
};

export default BrandKitEditor;
