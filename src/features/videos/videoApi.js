import { apiSlice } from "../api/apiSlice";

export const videoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFolder: builder.mutation({
      query: (data) => ({
        url: "/api/v1/medias/createFolder",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Drives"],
    }),
    addFile: builder.mutation({
      query: (data) => ({
        url: "/api/v1/medias/addFile",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Videos", "Drives", "Folders"],
    }),
    getUserDrive: builder.query({
      query: () => "/api/v1/medias/getUserDrive",
      providesTags: ["Drives"],
    }),
    getFolderFile: builder.query({
      query: (id) => `/api/v1/medias/getFolderFile/${id}`,
      providesTags: ["Folders"],
    }),
    getUserAllFiles: builder.query({
      query: () => "/api/v1/medias/getUserAllFiles",
      providesTags: ["Videos"],
    }),
    updateFolder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/medias/updateFolder/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Drives"],
    }),
  }),
});

export const {
  useCreateFolderMutation,
  useAddFileMutation,
  useGetUserDriveQuery,
  useGetFolderFileQuery,
  useGetUserAllFilesQuery,
  useUpdateFolderMutation,
} = videoApi;
