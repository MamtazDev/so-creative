import MoreBtn from "./MoreBtn";

const StockVideos = () => {
  return (
    <div className="mb-10">
      <p className="text-xl font-bold mb-6">Stock Videos</p>
      <div className="flex items-center gap-6">
        {[1, 2, 3, 4, 5].map((data, index) => (
          <div className="rounded-xl overflow-hidden" key={index}>
            <iframe
              className="  rounded-xl hover:scale-110 transition-all duration-300 ease-in"
              width="100%"
              height="108"
              src="https://www.youtube.com/embed/Z76aWfCc7_k?si=GW52k_zAdVfPOw66"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
        <MoreBtn />
      </div>
    </div>
  );
};

export default StockVideos;
