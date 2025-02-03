import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cssColorAPIslice = createApi({
  reducerPath: 'cssColorAPIslice',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gist.githubusercontent.com/Ivaz7/e58b866dbdb98c463c3e86aed02c0402/raw/",
    responseHandler: async (response) => response.text(), 
  }),
  endpoints: (builder) => ({
    getCSSColors: builder.query({
      query: () => "cssNamedColors.csv",
    }),
  }),
});

export const { useGetCSSColorsQuery } = cssColorAPIslice;

