import { Product } from "@/types/product.type";
import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getProductById: build.query<Product, number>({
      query: (id) => `/products/${id}`,
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
