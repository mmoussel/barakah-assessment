import React, { useCallback } from "react";

import { Section } from "@/components/shared/section.component";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { Spacer } from "@/components/shared/spacer.component";
import { CartHeader } from "@/components/cart/header.component";
import { Checkbox } from "@/components/shared/checkbox.component";
import { CartItem } from "@/components/cart/cart-item.component";
import { CartProduct } from "@/types/product.type";
import { Button } from "@/components/shared/button.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleSelectAllCartItems } from "@/redux/slices/cart.slice";

export const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleSelectAllChange = (value: boolean) => {
    dispatch(toggleSelectAllCartItems(value));
  };

  const renderItem = useCallback<ListRenderItem<CartProduct>>(({ item }) => {
    return <CartItem cartItem={item} />;
  }, []);

  return (
    <View className="bg-card flex-1">
      <CartHeader />

      <Spacer size={2} />

      <Section className="bg-background rounded-t-3xl pt-4 flex-1">
        {!!cartItems.length && (
          <Checkbox
            onChange={handleSelectAllChange}
            label="Select all"
            checked={cartItems.findIndex((item) => !item.selected) < 0}
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
