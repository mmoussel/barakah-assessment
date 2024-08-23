import React, { useEffect, useState } from "react";

import { Section } from "@/components/shared/section.component";
import { FlatList, Text, View } from "react-native";
import { Spacer } from "@/components/shared/spacer.component";
import { CartHeader } from "@/components/cart/header.component";
import { Checkbox } from "@/components/shared/checkbox.component";
import { useGetProductsQuery } from "@/redux/apis/product.api";
import { CartItem } from "@/components/cart/cart-item.component";
import { Product } from "@/types/product.type";
import { Button } from "@/components/shared/button.component";

export const CartScreen = () => {
  const { data } = useGetProductsQuery();

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    if (data) {
      setSelectedIds(data.map((item) => item.id));
    }
  }, [data]);

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
        return data.map((item) => item.id);
      } else {
        return [];
      }
    });
  };

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <CartItem
        cartItem={{ product: item, quantity: 1 }}
        onSelectChange={(value) => {
          handleSelectChange(item.id, value);
        }}
        selected={!!selectedIds.includes(item.id)}
      />
    );
  };

  if (!data) return null;

  return (
    <View className="bg-card flex-1">
      <CartHeader />

      <Spacer size={2} />

      <Section className="bg-background rounded-t-3xl pt-4 flex-1">
        <Checkbox
          onChange={handleSelectAllChange}
          label="Select all"
          checked={selectedIds.length === data.length}
        />

        <Spacer />

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
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
