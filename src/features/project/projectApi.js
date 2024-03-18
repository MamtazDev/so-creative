import { useDispatch } from "react-redux";
import { apiSlice } from "../api/apiSlice";

export const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrUpdateProject: builder.mutation({
      query: (data) => ({
        url: "/v1/project/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Project", "AllProjects"],
    }),
    getProjectDetails: builder.query({
      query: (id) => `/v1/project/${id}`,
      providesTags: ["Project"],
    }),
    getUserProjects: builder.query({
      query: (queryString) => `/v1/project/userProjects?${queryString}`,
      providesTags: ["AllProjects"],
    }),
  }),
});

export const {
  useAddOrUpdateProjectMutation,
  useGetProjectDetailsQuery,
  useGetUserProjectsQuery,
} = projectApi;
