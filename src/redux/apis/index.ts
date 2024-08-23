import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://fakestoreapi.com",
});

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery,
  tagTypes: ["Products"],
  endpoints: () => ({}),
});
