import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const worldPopulation = createApi({
  reducerPath: 'worldPopulation',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gist.githubusercontent.com/Ivaz7/59af5f6d204ae7a68649a24150d39b2b/raw/",
    responseHandler: async (Response) => Response.text(),
  }),
  endpoints: (builder) => ({
    getWorldPopulation: builder.query({
      query: () => "WorldPopulation.csv",
    })
  })
})

export const { useGetWorldPopulationQuery } = worldPopulation;