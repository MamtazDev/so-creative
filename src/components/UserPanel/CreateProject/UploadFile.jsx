import { useState } from "react";
import { useDropzone } from "react-dropzone";
import mp4 from "../../../assets/mp4.svg";
import SelectedVideo from "./SelectedVideo";
import UploadProgress from "./UploadProgress";
import { BASE_API_URL } from "../../../config/config";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProjectId } from "../../../features/project/projectSlice";
import * as tus from "tus-js-client";

const UploadFile = () => {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [newSelectedVideo, setNewSelectedVideo] = useState([]);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [vimeoVideoInfo, setVimeoVideoInfo] = useState(null)

  const [isVimeoProcessDone, setIsVimeoProcessDone] = useState(false)

  const { accessToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "video/mp4": [".mp4"],
      "video/mov": [".mov"],
    },
    onDrop: (acceptedFiles) => {
      setNewSelectedVideo([...acceptedFiles]);
      setIsUploading(true);

      /* ================ 17-03-2024 Start =============== */
      const selectedFile = acceptedFiles[0]

      const uplaod = async () => {
        try {
          const res = await fetch(`${BASE_API_URL}/v1/vimeo/create-video-instant`, {
            method: "POST",
            body: JSON.stringify({ size: selectedFile.size }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const result = await res.json();

          console.log(result.data);

          const { upload_link } = result.data

          console.log("upload_link", upload_link);

          const tusUpload = new tus.Upload(selectedFile, {
            endpoint: upload_link,
            uploadUrl: upload_link,
            onProgress: (bytesUploaded, bytesTotal) => {
              const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);

              console.log(`${percentage}% uploaded`);
              setUploadProgress(percentage);
            },

            onError: (error) => {
              console.error("Failed to upload", error);
              alert("There is an issue with uploading video.")

              // Handle error
            },

            onSuccess: () => {
              console.log("Upload finished");
              setVimeoVideoInfo(result.data);
              setUploadProgress(0);

              console.log("Uploaded finished data:", result.data);

              setIsVimeoProcessDone(true)

              // Handle successful upload
              const url = result.data.link;
              const regex = /vimeo\.com\/(\d+)/;
              const videoId = url.match(regex);
              
              console.log("video id", videoId[1])
               // Interval to check if the process is done
              const interval = setInterval(async() => {
                

                const res = await fetch(`${BASE_API_URL}/v1/vimeo/${videoId[1]}?fields=transcode.status,download,upload.status,is_playable`, {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
      
                const result = await res.json();
      
                console.log("check the video processing is done or not, ",result.data.is_playable);


                // Check if the process is done
                if (result.data.is_playable) {
                  setIsVimeoProcessDone(false)
                  clearInterval(interval); // Clear the interval once process is done
                 
                }
              }, 1000); 
            },
          });

          tusUpload.start();
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }

      uplaod();



      /* ================ 17-03-2024 End =============== */

      // const formData = new FormData();

      // formData.append("file", acceptedFiles[0]);

      // const upload = async () => {
      //   try {
      //     const response = await axios.post(
      //       `${BASE_API_URL}/v1/project/add`,
      //       formData,
      //       {
      //         headers: {
      //           Authorization: `Bearer ${accessToken}`,
      //           "Content-Type": "multipart/form-data",
      //         },
      //         onUploadProgress: (e) => {
      //           const progress = Math.floor((e.loaded / e.total) * 100);

      //           setUploadProgress(progress);
      //           // setIsUploading(false);
      //         },
      //       }
      //     );

      //     const data = response.data;
      //     if (data.success) {
      //       dispatch(setProjectId(data.data._id));
      //     }
      //   } catch (error) {
      //     console.log(error);
      //     // setIsUploading(false);
      //   }
      // };

      // upload();
    },
    multiple: false,
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
      className=" text-center mb-10 rounded-xl relative"
    >
      {/* {isUploading && (
        <UploadProgress
          uploadProgress={uploadProgress}
          newSelectedVideo={newSelectedVideo}
        />
      )} */}
      <div className="p-12 hover:cursor-pointer">
        <input {...getInputProps()} />
        <img className="m-auto mb-5" src={mp4} alt="" />
        <p className="text-lg font-semibold mb-1">Upload a File or</p>
        <p className="text-sm text-slate-500 font-medium">
          Click to browse or drag & drop video files here
        </p>
      </div>

      {/* <iframe
        title="vimeo-player"
        // src={vimeoVideoInfo.player_embed_url}
        src={"https://player.vimeo.com/video/924296735?h=704de352d"}
        width="600"
        height="340"
        allowFullScreen
      ></iframe>

      <div class="video-container">
        <iframe src="https://player.vimeo.com/video/924296735?controls=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <a class="download-button" href="https://vimeo.com/924296735/download">Download</a>
      </div> */}
      {
        !vimeoVideoInfo ? <SelectedVideo
          selectedVideos={selectedVideos}
          uploadProgress={uploadProgress}
          newSelectedVideo={newSelectedVideo}
          isUploading={isUploading}
        /> : 
        <div className="text-start border-dashed p-6 border-t">
          {! isVimeoProcessDone ? <iframe
            title="vimeo-player"
            src={vimeoVideoInfo.player_embed_url}
            // src={"https://player.vimeo.com/video/924296735?h=704de352d"}
            width="220"
            height="180" 
            allowFullScreen
          ></iframe>:<p>Video procession going on...</p>}
        </div>
      }




    </div>
  );
};

export default UploadFile;
