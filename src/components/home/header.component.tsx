import React from "react";
import { TabsHeaderWrapper } from "../tabs/header-wrapper.component";
import { Section } from "../shared/section.component";

import Icon from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { Spacer } from "../shared/spacer.component";
import { SearchInput } from "../shared/search-input.component";

export const Header = () => {
  return (
    <TabsHeaderWrapper>
      <Section className="py-4">
        <View className="flex-row items-center justify-between ">
          <View className="w-10 h-10 rounded-full bg-primary items-center justify-center">
            <Icon name="pricetag-outline" size={24} color="black" />
          </View>

          <View className="items-center">
            <Text className="text-subtext">Delivery address</Text>
            <Text className="text-base font-semibold">
              92 High Street, London
            </Text>
          </View>

          <View className="w-10 h-10 rounded-full bg-card items-center justify-center">
            <Icon name="notifications-outline" size={24} color="black" />
          </View>
        </View>

        <Spacer />

        <SearchInput />
      </Section>
    </TabsHeaderWrapper>
  );
};
