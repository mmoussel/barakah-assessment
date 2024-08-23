import React from "react";
import { TabsHeaderWrapper } from "../tabs/header-wrapper.component";
import { Section } from "../shared/section.component";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, View } from "react-native";
import { Spacer } from "../shared/spacer.component";

export const CartHeader = () => {
  return (
    <TabsHeaderWrapper>
      <Section className="py-4">
        <View className="flex-row items-center justify-between ">
          <Text className="text-2xl font-bold">Cart</Text>

          <View className="w-10 h-10 rounded-full bg-card items-center justify-center">
            <Icon name="dots-horizontal" size={24} color="black" />
          </View>
        </View>

        <Spacer />

        <View className="p-4 flex-row items-center justify-between rounded-2xl bg-card">
          <View className="flex-row items-center">
            <MaterialIcons name="location-on" size={24} color="black" />
            <Spacer dir="horizontal" size={2} />
            <Text>92 High Street, London</Text>
          </View>

          <MaterialIcons name="chevron-right" size={24} color="black" />
        </View>
      </Section>
    </TabsHeaderWrapper>
  );
};
