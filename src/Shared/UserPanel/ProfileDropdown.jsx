import { Headset, SignOut, User } from "@phosphor-icons/react";
import ProfileActive from "./ProfileActive";
import { useState } from "react";
import AccountModal from "../../Modal/AccountModal";

const ProfileDropdown = ({ setShowProfile, profileRef }) => {
  const [showAccount, setShowAccount] = useState(false);

  const openAccountModal = () => {
    setShowAccount(true);
  };
  const items = [
    {
      icon: <User className="text-state-700" size={24} />,
      title: "Account Settings",
      function: openAccountModal,
    },
    {
      icon: <Headset className="text-state-700" size={24} />,
      title: "Support ",
    },
    {
      icon: <SignOut className="text-state-700" size={24} />,
      title: "Logout ",
    },
  ];

  return (
    <div>
      <div
        ref={profileRef}
        className="fixed z-50 top-[84px] right-6  w-full max-h-[85vh] overflow-y-auto no_scrollbar  bg-white rounded-2xl shadow-2xl  max-w-[320px]"
      >
        <div className="flex items-center gap-3.5 p-5 border-b">
          <ProfileActive />
          <div>
            <p className="text-base font-bold mb-1">James</p>
            <p className="text-state-500 text-sm font-normal ">
              james@example.com
            </p>
          </div>
        </div>
        <div className="py-5 px-6 flex flex-col  gap-6">
          {items.map((data, index) => (
            <div
              onClick={
                data?.function
                // setShowProfile(false);
                // setShowAccount(true);
              }
              className="flex items-center gap-3.5 cursor-pointer"
              key={index}
            >
              {data.icon}
              <p className="text-base font-medium">{data.title}</p>
            </div>
          ))}
        </div>
      </div>

      {showAccount && <AccountModal setShowAccount={setShowAccount} />}
    </div>
  );
};

export default ProfileDropdown;