import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.minzifatravel.com/api/v1/admin/",
  }),
  tagTypes: ["hotels"],
  endpoints: (builder) => ({
    getAllHotels: builder.query({
      query: () => "hotels",
      providesTags: ["hotels"],
    }),
    getOneHotels: builder.query({
      query: (id) => `hotels/${id}`,
      providesTags: ["hotels"],
    }),
    deleteHotels: builder.mutation({
      query: (id) => ({
        url: `/tourType/${id}`,
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["hotels"],
    }),
  }),
});

export const { useGetAllHotelsQuery,useGetOneHotelsQuery } = hotelsApi;
