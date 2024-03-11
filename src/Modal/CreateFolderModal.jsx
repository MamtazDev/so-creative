import React from "react";
import Swal from "sweetalert2";
import {
  useCreateFolderMutation,
  useUpdateFolderMutation,
} from "../features/videos/videoApi";

const CreateFolderModal = ({
  setOpenCreateFolderModal,
  folderTitle,
  clickedItem,
  setClickedItem,
}) => {
  const [createFolder, { isLoading }] = useCreateFolderMutation();
  const [updateFolder, { isLoading: updating }] = useUpdateFolderMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    try {
      const res = folderTitle
        ? await updateFolder({ id: clickedItem, data: { title: title } })
        : await createFolder({ title: title });

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
        setOpenCreateFolderModal(false);
        folderTitle && setClickedItem(null);
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
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <form
            onSubmit={handleSubmit}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3
                    className="text-xl font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Folder Name
                  </h3>
                  <div className="mt-3 w-full">
                    <input
                      name="title"
                      type="text"
                      required
                      defaultValue={folderTitle ? folderTitle : ""}
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                disabled={isLoading || updating}
              >
                {folderTitle ? "Update" : "Create"}
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => {
                  folderTitle && setClickedItem(null);
                  setOpenCreateFolderModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFolderModal;