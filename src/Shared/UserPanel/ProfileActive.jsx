import active from "../../assets/active.svg";

const ProfileActive = ({ user }) => {
  // console.log("user", user.name);
  // const firstLetter = user.name.slice(0, 2);
  return (
    <div className="relative">
      <button className="text-white text-sm font-semibold h-12 w-12 bg-[#4F16A5] rounded-full p-3">
        {/* {firstLetter} */} JA
      </button>

      <img className="absolute bottom-0 -right-1" src={active} alt="" />
    </div>
  );
};

export default ProfileActive;
