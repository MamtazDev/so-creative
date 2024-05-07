import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SelectedVideo = ({ upload }) => {
  return (
    <div
      className={`text-start ${
        upload.length > 0 ? "border-dashed  p-6  border-t" : ""
      }`}
    >
      <div className="grid grid-cols-5 gap-4">
        {upload.map((i, index) => (
          <div className="relative" key={index}>
            <div className="h-[108px] w-full relative rounded-xl overflow-hidden">
              <video className="rounded-xl w-full h-full" controls>
                <source src={URL.createObjectURL(i.video)} type="video/mp4" />
              </video>

              {i.uploading && (
                <>
                  <CircularProgressbar
                    className="absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 "
                    value={i.progress}
                    strokeWidth={50}
                    counterClockwise={true}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      pathColor: "rgba(0, 0, 0, 0.6)",
                      trailColor: "transparent",
                    })}
                  />
                  <p className="text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[56px] text-semibold py-1 px-2">
                    {i.progress}%
                  </p>
                </>
              )}
            </div>
            <p className="text-sm font-medium mt-4">
              {i.video.name.substring(0, 20)}...
            </p>
            <p className="text-slate-500 font-normal text-xs">
              {(i.video.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedVideo;
