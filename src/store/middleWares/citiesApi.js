import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const citiesApi = createApi({
  reducerPath: "citiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.minzifatravel.com/api/v1/admin/",
  }),
  tagTypes: ["cities"],
  endpoints: (builder) => ({
    getAllCities: builder.query({
      query: () => "destinations",
      providesTags: ["cities"],
    }),
    deleteTourTypes: builder.mutation({
      query: (id) => ({
        url: `/tourType/${id}`,
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["TourTypes"],
    }),
  }),
});

export const { useGetAllCitiesQuery } = citiesApi;
