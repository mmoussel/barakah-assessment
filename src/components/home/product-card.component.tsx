import React, { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { Product } from "@/types/product.type";
import { Spacer } from "../shared/spacer.component";
import { TabStackNavigationProps } from "@/types/navigation.type";
import { useNavigation } from "@react-navigation/native";

interface Props {
  product: Product;
}
type NavigationProps = TabStackNavigationProps<"Home">;

export const ProductCard: FC<Props> = ({ product }) => {
  const { navigate } = useNavigation<NavigationProps["navigation"]>();

  const handlePress = () => {
    navigate("Product", { productId: product.id });
  };

  return (
    <Pressable className="flex-1" onPress={handlePress}>
      <View className="bg-card rounded-2xl p-4 w-full aspect-square">
        <Image
          source={{ uri: product.image }}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      <Spacer size={2} />

      <Text className="text-text font-semibold truncate" numberOfLines={2}>
        {product.title}
      </Text>

      <Spacer size={2} />

      <Text className="text-text font-bold text-lg">
        ${product.price.toFixed(2)}
        {"  "}
        <Text className="text-subtext text-xs font-normal line-through">
          ${(product.price * 1.25).toFixed(2)}
        </Text>
      </Text>
    </Pressable>
  );
};
