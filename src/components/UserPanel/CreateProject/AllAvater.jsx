import avater from "../../../assets/avater.svg";
import MoreBtn from "./MoreBtn";

const AllAvater = () => {
  return (
    <div>
      <p className="text-xl font-bold mb-6">AI Avatars</p>
      <div className="flex items-center gap-6">
        {[1, 2, 3, 4, 5].map((data, index) => (
          <div className="rounded-xl overflow-hidden" key={index}>
            <img src={avater} alt="" />
          </div>
        ))}
        <MoreBtn />
      </div>
    </div>
  );
};

export default AllAvater;
