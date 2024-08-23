import React, { FC } from "react";
import { Image, Text, View } from "react-native";

import AntDesignIcon from "@expo/vector-icons/AntDesign";

import { Checkbox } from "../shared/checkbox.component";
import { CartProduct } from "@/types/product.type";
import { Spacer } from "../shared/spacer.component";

interface Props {
  cartItem: CartProduct;
  selected?: boolean;
  onSelectChange: (value: boolean) => void;
}

export const CartItem: FC<Props> = ({
  cartItem: { product, quantity },
  onSelectChange,
  selected,
}) => {
  return (
    <View className="flex-row items-center">
      <Checkbox onChange={onSelectChange} checked={selected} />

      <View className="w-20 h-20 bg-card rounded-2xl p-4">
        <Image
          source={{ uri: product.image }}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      <Spacer dir="horizontal" />

      <View className="flex-1 h-20 justify-between">
        <Text className="text-text">{product.title}</Text>

        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-text">
            ${product.price.toFixed(2)}
          </Text>

          <View className="flex-row items-center ">
            <View className="w-5 h-5 rounded-full bg-card items-center justify-center">
              <AntDesignIcon name="minus" color={"black"} size={12} />
            </View>

            <Text className="font-normal mx-2 text-text">{quantity}</Text>

            <View className="w-5 h-5 rounded-full bg-card items-center justify-center">
              <AntDesignIcon name="plus" color={"black"} size={12} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
