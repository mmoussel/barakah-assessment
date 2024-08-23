import { ProductCard } from "@/components/home/product-card.component";
import { useGetProductByIdQuery } from "@/redux/apis/product.api";
import { RootStackScreenProps } from "@/types/navigation.type";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

type NavigationProps = RootStackScreenProps<"Product">;

export const ProductScreen = () => {
  const { params } = useRoute<NavigationProps["route"]>();
  const { data, isLoading } = useGetProductByIdQuery(params.productId);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center ">
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center ">
      <ProductCard product={data} />
    </View>
  );
};
