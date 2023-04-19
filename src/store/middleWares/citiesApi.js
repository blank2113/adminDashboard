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
    getOneDestination: builder.query({
      query: (id) => `destinations/${id}`,
      providesTags: ["cities"],
    }),
    addDestination: builder.mutation({
      query: (payload) => ({
        url: "destinations",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["cities"],
    }),
    editDestination: builder.mutation({
      query: (payload) => ({
        url: `destinations/${sessionStorage.getItem("destinationId")}`,
        method: "PUT",
        body: payload,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }),
      invalidatesTags: ["cities"],
    }),
    deleteDestination: builder.mutation({
      query: (id) => ({
        url: `destinations/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["cities"],
    }),
  }),
});

export const {
  useGetAllCitiesQuery,
  useAddDestinationMutation,
  useDeleteDestinationMutation,
  useGetOneDestinationQuery,
  useEditDestinationMutation,
} = citiesApi;
