import close from "../assets/close.png";
import accepted from "../assets/accepted.png";
import alert from "../assets/alert.png";
import rejected from "../assets/rejected.png";
import premium from "../assets/premium.png";

const Notification = ({ setShowNotification }) => {
  const notifications = [
    {
      pic: accepted,
      new: true,
      title: "Project Accepted  🎉",
      description:
        "<span  style='color:#4F46E5;'>@shawnmahbub </span>  accepted the job for Advanced Training Module.",
      time: "09:40 AM",
    },
    {
      pic: alert,
      new: false,
      title: "Exclusive Event Alert",
      description:
        "Join our annual event this weekend! Meet new people & more social. Register now!",
      time: "08:29 AM",
    },
    {
      pic: rejected,
      new: false,
      title: "Project Rejected",
      description:
        "<span style='color:#4F46E5;'>@shawnmahbub </span>  rejected the job for Advanced Training Module.",
      time: "20:30 PM",
    },
    {
      pic: premium,
      new: false,
      title: "Unlock Premium Features",
      description:
        "Upgrade to Premium for exclusive benefits & enhance your experience!",
      time: "10:30 AM",
    },
  ];
  return (
    <div className="notification fixed z-50 top-[84px] right-[82px]  w-full max-h-[85vh] overflow-y-auto no_scrollbar  bg-white rounded-2xl shadow-2xl p-6 max-w-[448px]">
      <div className="flex gap-2 justify-between items-center mb-6">
        <p className="text-xl font-bold">Notification</p>
        <button onClick={() => setShowNotification(false)}>
          <img src={close} alt="" />
        </button>
      </div>
      <div>
        <div className="flex gap-4 items-center mb-5">
          <p className="text-slate-500 text-sm font-semibold">Today</p>
          <div className="border-b w-full"></div>
        </div>
        <div>
          {notifications.slice(0, 2).map((data, index) => (
            <div key={index} className="flex items-start gap-4 mb-5">
              <img src={data.pic} alt="" />
              <div>
                <div className="flex items-center gap-2 justify-between">
                  <p>{data.title}</p>
                  {data.new && (
                    <button className="text-xs text-white py-[1px] px-2 rounded-[32px] bg-[#E84E4E]">
                      <span className="inline-block w-2 h-2 rounded-full bg-white mr-1"></span>
                      New
                    </button>
                  )}
                </div>
                <p dangerouslySetInnerHTML={{ __html: data.description }} />
                <p>{data.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center mb-5">
          <p className="text-slate-500 text-sm font-semibold">Yesterday</p>
          <div className="border-b w-full"></div>
        </div>
        <div>
          {notifications.slice(2, 4).map((data, index) => (
            <div key={index} className="flex items-start gap-4 mb-5">
              <img src={data.pic} alt="" />
              <div>
                <div className="flex items-center gap-2 justify-between">
                  <p>{data.title}</p>
                  {data.new && (
                    <button className="text-xs text-white py-[1px] px-2 rounded-[32px] bg-[#E84E4E]">
                      <span className="inline-block w-2 h-2 rounded-full bg-white mr-1"></span>
                      New
                    </button>
                  )}
                </div>
                <p dangerouslySetInnerHTML={{ __html: data.description }} />
                <p>{data.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="rounded-full w-full border py-2 pr-4 pl-2 text-base font-medium">
        Load More
      </button>
    </div>
  );
};

export default Notification;
