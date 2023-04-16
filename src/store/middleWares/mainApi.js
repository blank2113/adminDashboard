import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.minzifatravel.com/api/v1/admin/",
  }),
  tagTypes: ['TourTypes'],
  endpoints: (builder) => ({
    getAllTours: builder.query({
      query: () => "tours",
    }),
    getAllTourTypes: builder.query({
      query: () => "tourType",
      providesTags: ['TourTypes'],
    }),
    deleteTourTypes: builder.mutation({
     query:(id)=>({
        url: `/tourType/${id}`,
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
     }),
     invalidatesTags: ['TourTypes'],
    }),
  }),
});

export const { useGetAllToursQuery, useGetAllTourTypesQuery,useDeleteTourTypesMutation } = mainApi;
