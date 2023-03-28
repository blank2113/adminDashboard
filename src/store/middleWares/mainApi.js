import { createApi,  fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const mainApi = createApi({
    reducerPath: "mainApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.minzifatravel.com/api/v1/"
    }),
    endpoints: (builder)=> ({
        getAllTours: builder.query({
            query: ()=> "tours"
        })
    })
})


export const {useGetAllToursQuery} = mainApi;