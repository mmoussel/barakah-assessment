import React from "react";

import { ProductList } from "@/components/home/product-list.component";
import { Loading } from "@/components/shared/loading.component";
import { Section } from "@/components/shared/section.component";
import { useGetProductsQuery } from "@/redux/apis/product.api";

export const HomeScreen = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Section className="mt-14 bg-background ">
      <ProductList data={data} />
    </Section>
  );
};
