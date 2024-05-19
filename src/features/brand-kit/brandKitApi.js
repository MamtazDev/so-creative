import { apiSlice } from "../api/apiSlice";

export const brandKitApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBrand: builder.mutation({
      query: (data) => ({
        url: "/v1/brand-Kit",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["brand-kit"],
    }),

    myBrandKits: builder.query({
      query: () => `/v1/brand-Kit/my-kits`,
      providesTags: ["brand-kit"],
    }),

    getBrandKit: builder.query({
      query: (id) => `/v1/brand-Kit/${id}`,
      providesTags: ["brand-kit"],
    }),

    updateBrand: builder.mutation({
      query: (id) => ({
        url: `/v1/brand-Kit/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["brand-kit"],
    }),

    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/v1/brand-Kit/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["brand-kit"],
    }),
  }),
});

export const {
  useCreateBrandMutation,
  useMyBrandKitsQuery,
  useDeleteBrandMutation,
  useGetBrandKitQuery,
  useUpdateBrandMutation,
} = brandKitApi;
