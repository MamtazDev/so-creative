const RecentVideos = () => {
  const videos = [
    {
      name: "Product Showcase Video",
      status: "Exported",
    },
    {
      name: "Employee Onboarding Training",
      status: "Exported",
    },
    {
      name: "Sales Strategies Video Series",
      status: "Draft",
    },
    {
      name: "Advanced Training Module",
      status: "Exported",
    },
    {
      name: "Marketing Campaign Launch Video",
      status: "Draft",
    },
  ];
  return (
    <div className="mb-24">
      <p className="text-slate-900 text-xl font-bold mb-6">Recent Videos</p>
      <div className="grid grid-cols-5 gap-6">
        {videos.map((data, index) => (
          <div className="relative" key={index}>
            {" "}
            <iframe
              className="rounded-xl mb-4"
              width="100%"
              height="160"
              src="https://www.youtube.com/embed/Z76aWfCc7_k?si=GW52k_zAdVfPOw66"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <button
              className={`${
                data.status === "Draft" ? "bg-slate-800" : "bg-green-500"
              } text-white font-semibold text-sm px-[6px] rounded-md absolute top-2 right-2`}
            >
              {data.status}
            </button>
            <p className="text-base text-slate-900 font-semibold mb-1">
              {data.name}
            </p>
            <p className="text-slate-500 text-sm font-normal">1 day ago</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentVideos;
