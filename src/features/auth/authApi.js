import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";
import Cookies from "js-cookie";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/v1/auth/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          Cookies.set(
            "soCreativeAuth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing, handle from ui
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/v1/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          Cookies.set(
            "soCreativeAuth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing, handle from ui
        }
      },
    }),
    updateUserSettings: builder.mutation({
      query: (data) => ({
        url: "/v1/auth/updateUserInfo",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
        try {
          const result = await queryFulfilled;

          const userInfo = getState().auth;

          Cookies.set(
            "soCreativeAuth",
            JSON.stringify({
              accessToken: userInfo?.accessToken,
              user: result.data.data,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: userInfo?.accessToken,
              user: result.data.data,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUpdateUserSettingsMutation,
} = authApi;
