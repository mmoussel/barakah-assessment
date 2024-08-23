import React, { useState } from "react";

import { Section } from "@/components/shared/section.component";
import { FlatList, Text, View } from "react-native";
import { Spacer } from "@/components/shared/spacer.component";
import { CartHeader } from "@/components/cart/header.component";
import { Checkbox } from "@/components/shared/checkbox.component";
import { CartItem } from "@/components/cart/cart-item.component";
import { CartProduct } from "@/types/product.type";
import { Button } from "@/components/shared/button.component";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const CartScreen = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const [selectedIds, setSelectedIds] = useState<number[]>(
    cartItems.map((item) => item.product.id),
  );

  const handleSelectChange = (productId: number, value: boolean) => {
    setSelectedIds((prev) => {
      if (value) {
        return [...prev, productId];
      } else {
        return prev.filter((id) => id !== productId);
      }
    });
  };

  const handleSelectAllChange = (value: boolean) => {
    setSelectedIds(() => {
      if (value) {
        return cartItems.map((item) => item.product.id);
      } else {
        return [];
      }
    });
  };

  const renderItem = ({ item }: { item: CartProduct }) => {
    return (
      <CartItem
        cartItem={item}
        onSelectChange={(value) => {
          handleSelectChange(item.product.id, value);
        }}
        selected={!!selectedIds.includes(item.product.id)}
      />
    );
  };

  return (
    <View className="bg-card flex-1">
      <CartHeader />

      <Spacer size={2} />

      <Section className="bg-background rounded-t-3xl pt-4 flex-1">
        {!!cartItems.length && (
          <Checkbox
            onChange={handleSelectAllChange}
            label="Select all"
            checked={selectedIds.length === cartItems.length}
          />
        )}

        <Spacer />

        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.product.id.toString()}
          ListEmptyComponent={
            <Text className="font-bold">Your cart is empty.</Text>
          }
          contentContainerStyle={{ flexGrow: 1 }}
          ItemSeparatorComponent={() => (
            <View className="my-4">
              <View className="bg-divider h-[1px] w-2/3 self-end" />
            </View>
          )}
        />

        <Spacer />

        <Button onPress={() => {}}>Checkout</Button>
        <Spacer />
      </Section>
    </View>
  );
};
