import React from "react";

import { ProductList } from "@/components/home/product-list.component";
import { Loading } from "@/components/shared/loading.component";
import { Section } from "@/components/shared/section.component";
import { useGetProductsQuery } from "@/redux/apis/product.api";
import { View } from "react-native";
import { Header } from "@/components/home/header.component";
import { Spacer } from "@/components/shared/spacer.component";

export const HomeScreen = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View className="bg-card flex-1">
      <Header />

      <Spacer size={2} />

      <Section className="bg-background rounded-t-3xl pt-4 flex-1">
        <ProductList data={data} />
      </Section>
    </View>
  );
};
