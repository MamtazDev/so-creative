import close from "../../assets/close.svg";

const BrandcolorInner = ({ main, data, setMain, index }) => {
  const removeHandler = () => {
    const updatedMain = main.filter((item) => item !== data);

    setMain((prevState) => ({
      ...prevState,
      [index]: updatedMain,
    }));
  };

  return (
    <div className="border rounded-xl relative">
      <span onClick={removeHandler} className="absolute top-1 right-1">
        <img src={close} alt="" />
      </span>
      <div
        className={` ${data} h-[90px] flex justify-center rounded-t-xl`}
        style={{ backgroundColor: `${data}` }}
      ></div>
      <div className="py-2 px-3">{data}</div>
    </div>
  );
};

export default BrandcolorInner;
