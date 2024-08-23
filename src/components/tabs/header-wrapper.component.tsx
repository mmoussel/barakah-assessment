import { View } from "react-native";
import React from "react";
import { STATUS_BAR_PADDING } from "@/constants/status-bar.constant";

export const TabsHeaderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <View
      style={{
        paddingTop: STATUS_BAR_PADDING,
      }}
      className="bg-background rounded-b-3xl"
    >
      {children}
    </View>
  );
};
