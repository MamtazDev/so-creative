import axios from "axios";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import * as tus from "tus-js-client";
import mp4 from "../../../assets/mp4.svg";
import { BASE_API_URL } from "../../../config/config";
import { setProjectId } from "../../../features/project/projectSlice";
import { default as SelectedVideo } from "./SelectedVideo";

const UploadFile = () => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [upload, setUpload] = useState([
    // { success: false, uploading: false, progress: 0, video: "" },
  ]);

  // mohii
  const { accessToken } = useSelector((state) => state.auth);
  const { projectId } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "video/mp4": [".mp4"],
      "video/mov": [".mov"],
    },
    onDrop: (acceptedFiles) => {
      setUpload(
        acceptedFiles.map((i) => ({
          success: false,
          uploading: true,
          progress: 0,
          video: i,
        }))
      );

      const upload = async (selectedFile, index) => {
        try {
          const res = await fetch(
            `${BASE_API_URL}/v1/vimeo/create-video-instant`,
            {
              method: "POST",
              body: JSON.stringify({ size: selectedFile.size }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const result = await res.json();

          const { upload_link } = result.data;

          const tusUpload = new tus.Upload(selectedFile, {
            endpoint: upload_link,
            uploadUrl: upload_link,
            onProgress: (bytesUploaded, bytesTotal) => {
              const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(
                2
              );

              console.log(`${percentage}% uploaded`);

              setUpload((prev) => {
                const result = [...prev];
                result[index].progress = percentage;

                return result;
              });
            },

            onError: (error) => {
              console.error("Failed to upload", error);
              alert("There is an issue with uploading video.");

              // Handle error
            },

            onSuccess: async () => {
              console.log("Upload finished");
              console.log("Uploaded finished data:", result);

              setUpload((prev) => {
                const result = [...prev];
                result[index].progress = 0;
                result[index].uploading = false;
                result[index].success = true;

                return result;
              });

              // ---- saving data on database ----//

              const formData = projectId
                ? {
                    title: selectedFile?.name,
                    size: selectedFile?.size,
                    path: result.data.player_embed_url,
                    // path: "https://player.vimeo.com/video/925317004?h=de6e76e94a",
                    projectId: projectId,
                  }
                : {
                    title: selectedFile?.name,
                    size: selectedFile?.size,
                    path: result.data.player_embed_url,
                    // path: "https://player.vimeo.com/video/925317004?h=de6e76e94a",
                  };

              const response = await axios.post(
                ` ${BASE_API_URL}/v1/project/add`,
                formData,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                  },
                }
              );

              const data = response.data;
              if (data.success) {
                dispatch(setProjectId(data.data._id));
              }

              // Handle successful upload
              const url = result.data.link;
              const regex = /vimeo\.com\/(\d+)/;
              const videoId = url.match(regex);

              console.log("video id", videoId[1]);
              // Interval to check if the process is done
              const interval = setInterval(async () => {
                const res = await fetch(
                  `${BASE_API_URL}/v1/vimeo/${videoId[1]}?fields=transcode.status,download,upload.status,is_playable`,
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );

                const result = await res.json();

                console.log(
                  "check the video processing is done or not, ",
                  result.data.is_playable
                );

                // Check if the process is done
                if (result.data.is_playable) {
                  setIsVimeoProcessDone(false);
                  clearInterval(interval); // Clear the interval once process is done
                }
              }, 1000);
            },
          });

          tusUpload.start();
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      };

      for (let i = 0; i < acceptedFiles.length; i++) {
        upload(acceptedFiles[i], i);
      }
    },
    multiple: true,
    onDragEnter: () => {
      setIsDragActive(true);
    },
    onDragLeave: () => {
      setIsDragActive(false);
    },
  });

  const dashedBoxStyle = {
    border: isDragActive ? "1px dashed #4F46E5 " : "1px dashed #E2E8F0",
    background: isDragActive ? "#EEF2FF" : "",
  };

  return (
    <div
      {...getRootProps({ style: dashedBoxStyle })}
      className="text-center mb-10 rounded-xl relative"
    >
      {/* {isUploading && (
        <UploadProgress
          uploadProgress={uploadProgress}
          newSelectedVideo={newSelectedVideo}
        />
      )} */}
      <div className="p-12  ">
        <input {...getInputProps()} />
        <img className="m-auto mb-5" src={mp4} alt="" />
        <p className="text-lg font-semibold mb-1">Upload a File or</p>
        <p className="text-sm text-slate-500 font-medium">
          Click to browse or drag & drop video files here
        </p>
      </div>

      <SelectedVideo upload={upload} />
    </div>
  );
};

export default UploadFile;

// const allVideos  = [
//   {
//     "link": "https://vimeo.com/925317004",
//     "player_embed_url": "https://player.vimeo.com/video/925317004?h=de6e76e94a",
//     "upload_link": "https://asia-files.tus.vimeo.com/files/vimeo-prod-src-tus-asia/5c43b0a8a5bf6ba4478a7c658a3e3aa0",
//     "status": "in_progress",
//     "size": 6264657
// },{
//   "link": "https://vimeo.com/925317004",
//   "player_embed_url": "https://player.vimeo.com/video/925317004?h=de6e76e94a",
//   "upload_link": "https://asia-files.tus.vimeo.com/files/vimeo-prod-src-tus-asia/5c43b0a8a5bf6ba4478a7c658a3e3aa0",
//   "status": "in_progress",
//   "size": 6264657
// }
// ]
