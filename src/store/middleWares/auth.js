import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.minzifatravel.com/api/calculate/",
  }),
  endpoints: (build) => ({
    getAuth: build.query({
      query: () => "login",
    }),
    getAuthorization: build.mutation({
      query: (payload) => ({
        url: "login",
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      }),
    }),
  }),
});

export const { useGetAuthorizationMutation } = authApi;