import { useRef, useState } from "react";
import AddColor from "../../../Modal/AddColor";
import BrandcardInner from "../../../Shared/UserPanel/BrandcardInner";
import BrandcolorInner from "../../../Shared/UserPanel/BrandcolorInner";
import PlusButton from "../../../Shared/UserPanel/PlusButton";
import UploadButton from "../../../Shared/UserPanel/UploadButton";
import BrandKitCommon from "./BrandKitCommon";

const BrandKitEditor = ({ data, setData }) => {
  const [colorModal, setColorModal] = useState(false);

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

    setData((prevState) => ({
      ...prevState,
      [name]: [...(prevState[name] || []), file],
    }));
  };

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
        {data?.brandGuidelines?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {data?.brandGuidelines?.map((i, index) => (
              <BrandcardInner
                key={index}
                data={i}
                index={"brandGuidelines"}
                main={data.brandGuidelines}
                setMain={setData}
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

        {data?.logos?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {data?.logos?.map((i, index) => (
              <BrandcardInner
                key={index}
                data={i}
                index={"logos"}
                main={data?.logos}
                setMain={setData}
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
        {data?.fonts?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {data?.fonts?.map((i, index) => (
              <BrandcardInner
                key={index}
                data={i}
                index={"fonts"}
                main={data?.fonts}
                setMain={setData}
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
          kitName="colorPalette"
          kitRef={colorRef}
        />
        {data?.colorPalette?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {data?.colorPalette?.map((i, index) => (
              <BrandcolorInner
                key={index}
                data={i}
                index={"colorPalette"}
                main={data?.colorPalette}
                setMain={setData}
              />
            ))}
            <PlusButton handleClick={() => setColorModal(true)} />
          </div>
        ) : (
          <UploadButton handleFunction={() => setColorModal(true)} />
        )}
        {colorModal && (
          <AddColor
            nameColor="colorPalette"
            setData={setData}
            modalHandler={setColorModal}
          />
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
        {data?.imageAssets?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {data?.imageAssets?.map((i, index) => (
              <BrandcardInner
                key={index}
                data={i}
                index={"imageAssets"}
                main={data?.imageAssets}
                setMain={setData}
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
        {data?.videoAssets?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {data?.videoAssets?.map((i, index) => (
              <BrandcardInner
                key={index}
                data={i}
                index={"videoAssets"}
                main={data?.videoAssets}
                setMain={setData}
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
        {data?.audioAssets?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {data?.audioAssets?.map((i, index) => (
              <BrandcardInner
                key={index}
                data={i}
                index={"audioAssets"}
                main={data?.audioAssets}
                setMain={setData}
              />
            ))}
            <PlusButton handleClick={() => audioAssetRef.current.click()} />
          </div>
        ) : (
          <UploadButton handleFunction={() => audioAssetRef.current.click()} />
        )}
      </div>
    </div>
  );
};

export default BrandKitEditor;
