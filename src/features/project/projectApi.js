import { useDispatch } from "react-redux";
import { apiSlice } from "../api/apiSlice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProject: builder.mutation({
      query: (data) => ({
        url: "/v1/project/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Project", "AllProjects", "UserProjects"],
    }),
    updateProject: builder.mutation({
      query: (data) => ({
        url: "/v1/project/update",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Project", "AllProjects", "UserProjects"],
    }),

    getProjectDetails: builder.query({
      query: (id) => `/v1/project/${id}`,
      providesTags: ["Project"],
    }),
    getUserProjects: builder.query({
      query: (queryString) => `/v1/project/userProjects?${queryString}`,
      providesTags: ["UserProjects"],
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: "/v1/project/addComment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comments"],
    }),
    getProjectComments: builder.query({
      query: (projectId) => `/v1/project/comment/${projectId}`,
      providesTags: ["Comments"],
    }),
    getAllProjects: builder.query({
      query: (queryString) => `/v1/project/getAllProjects?${queryString}`,
      providesTags: ["AllProjects"],
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetProjectDetailsQuery,
  useGetUserProjectsQuery,
  useUpdateProjectMutation,
  useAddCommentMutation,
  useGetProjectCommentsQuery,
  useGetAllProjectsQuery,
} = projectApi;
