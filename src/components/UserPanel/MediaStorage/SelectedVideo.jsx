import React from "react";
import { useAddFileMutation } from "../../../features/videos/videoApi";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const SelectedVideo = ({ selectedVideo, setOpedUploadVideoModal }) => {
  const [addFile, { isLoading }] = useAddFileMutation();
  const { id } = useParams();

  const handleUploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append("title", selectedVideo.name);
      formData.append("video", selectedVideo);
      id && formData.append("parentFolderId", id);
      const res = await addFile(formData);

      if (res?.error?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.error}`,
        });
      }
      if (res?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.data?.message}`,
        });
      }
      if (res?.data?.success) {
        setOpedUploadVideoModal(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };

  return (
    <div className="text-center border-t border-dashed p-6">
      <div>
        <video className="rounded-xl mb-4 h-[500px] w-full" controls>
          <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm font-medium">{selectedVideo.name}</p>
        <p className="text-slate-500 font-normal text-xs">
          {(selectedVideo.size / (1024 * 1024)).toFixed(2)} MB
        </p>

        <button
          className="py-2 px-5 rounded-full bg-indigo-600 text-white text-sm mt-3"
          onClick={handleUploadFile}
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default SelectedVideo;
