import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.minzifatravel.com/api/v1/admin/",
  }),
  tagTypes: ["TourTypes"],
  endpoints: (builder) => ({
    getAllTours: builder.query({
      query: () => "tours",
    }),
    getAllTourTypes: builder.query({
      query: () => "tourType",
      providesTags: ["TourTypes"],
    }),
    getTourTypesOne: builder.query({
      query: (id) => `tourType/${id}`,
      providesTags: ["TourTypes"],
    }),
    addTourType: builder.mutation({
      query: (payload) => ({
        url: "/tourType",
        method: "POST",
        body: payload
      }),
      invalidatesTags: ["TourTypes"],
    }),
    editTourType: builder.mutation({
      query: (payload) => ({
        url: `/tourType/${sessionStorage.getItem('tId')}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["TourTypes"],
    }),
    deleteTourTypes: builder.mutation({
      query: (id) => ({
        url: `tourType/${id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["TourTypes"],
    }),
  }),
});

export const {
  useGetAllToursQuery,
  useGetAllTourTypesQuery,
  useDeleteTourTypesMutation,
  useAddTourTypeMutation,
  useGetTourTypesOneQuery,
  useEditTourTypeMutation
} = mainApi;
