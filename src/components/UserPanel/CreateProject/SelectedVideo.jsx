import React, { useEffect, useState } from "react";

const SelectedVideo = ({
  selectedVideos,
  uploadProgress,
  newSelectedVideo,
  isUploading,
}) => {
  const [animationInProgress, setAnimationInProgress] = useState(false);

  useEffect(() => {
    if (isUploading) {
      setAnimationInProgress(true);
    } else {
      setAnimationInProgress(false);
    }
  }, [isUploading]);

  return (
    <div
      className={`text-start ${
        (selectedVideos.length > 0 || isUploading) &&
        "border-dashed  p-6  border-t"
      } `}
    >
      <div className="grid grid-cols-5 gap-4">
        {selectedVideos.length > 0 &&
          selectedVideos.map((video, index) => (
            <div key={index}>
              <video className="rounded-xl mb-4 h-[108px] w-full" controls>
                <source src={URL.createObjectURL(video)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-sm font-medium">{video.name}</p>
              <p className="text-slate-500 font-normal text-xs">
                {(video.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          ))}
        <div>
          {isUploading && (
            <div>
              <div className="relative">
                <video className="rounded-xl h-[108px] w-full" controls>
                  <source
                    src={URL.createObjectURL(newSelectedVideo[0])}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                {animationInProgress && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="176"
                    height="108"
                    viewBox="0 0 176 108"
                    fill="none"
                    className="absolute top-0 left-0"
                  >
                    <g opacity="0.6" filter="url(#filter0_b_958_33859)">
                      <path
                        d="M175.782 132.782C162.99 145.573 147.242 155.012 129.931 160.263C112.621 165.515 94.2821 166.415 76.5401 162.886C58.7981 159.357 42.2002 151.507 28.2168 140.031C14.2333 128.555 3.29586 113.808 -3.62674 97.0952C-10.5493 80.3826 -13.2434 62.2206 -11.4703 44.2181C-9.69724 26.2156 -3.51172 8.92827 6.53832 -6.11269C16.5884 -21.1537 30.1927 -33.4839 46.1463 -42.0113C62.0999 -50.5387 79.9103 -55 97.9999 -55L98 55L175.782 132.782Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_958_33859"
                        x="-76"
                        y="-119"
                        width="315.781"
                        height="348"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="32"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_958_33859"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_958_33859"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                )}
                <p
                  style={{ transform: "translate(-50% -50%)" }}
                  className="text-sm  absolute bg-white rounded-[56px] text-semibold py-1 px-2 top-[30%] left-[40%]"
                >
                  {uploadProgress}%
                </p>
              </div>
              <p className="text-sm font-medium mt-4">
                {newSelectedVideo[0].name}
              </p>
              <p className="text-slate-500 font-normal text-xs">
                {(newSelectedVideo[0].size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectedVideo;
