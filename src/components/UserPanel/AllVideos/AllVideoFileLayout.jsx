const AllVideoFileLayout = ({ filteredVideos }) => {
  return (
    <div>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "24px",
        }}
        className="w-full"
      >
        <thead>
          <tr className="text-slate-500 font-medium text-base">
            <th className="text-start ">Name</th>
            <th className="text-start">Status</th>
            <th className="text-start">Date Modified</th>
          </tr>
        </thead>
        <tbody>
          {filteredVideos.map((data, index) => (
            <tr key={index}>
              <td>
                <div className="flex gap-4 items-center">
                  {" "}
                  <iframe
                    className="rounded-xl mb-4"
                    width="113"
                    height="64"
                    src="https://www.youtube.com/embed/Z76aWfCc7_k?si=GW52k_zAdVfPOw66"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>{data.name}</p>
                </div>
              </td>
              <td>
                <button
                  className={`${
                    data.status === "Draft" ? "bg-slate-800" : "bg-green-500"
                  } text-white font-semibold text-sm px-[6px] rounded-md`}
                >
                  {data.status}
                </button>
              </td>
              <td className="text-base font-semibold">1 day ago</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllVideoFileLayout;
