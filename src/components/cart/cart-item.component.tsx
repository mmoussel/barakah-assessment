import React, { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";

import AntDesignIcon from "@expo/vector-icons/AntDesign";

import { Checkbox } from "../shared/checkbox.component";
import { CartProduct } from "@/types/product.type";
import { Spacer } from "../shared/spacer.component";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "@/redux/slices/cart.slice";

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
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(
      updateCartItemQuantity({ id: product.id, quantity: quantity + 1 }),
    );
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(
        updateCartItemQuantity({ id: product.id, quantity: quantity - 1 }),
      );
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

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
            <Pressable
              onPress={handleDecreaseQuantity}
              className="w-5 h-5 rounded-full bg-card items-center justify-center"
            >
              <AntDesignIcon name="minus" color={"black"} size={12} />
            </Pressable>

            <Text className="font-normal mx-2 text-text">{quantity}</Text>

            <Pressable
              onPress={handleIncreaseQuantity}
              className="w-5 h-5 rounded-full bg-card items-center justify-center"
            >
              <AntDesignIcon name="plus" color={"black"} size={12} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
