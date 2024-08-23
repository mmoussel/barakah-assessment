import React, { FC } from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import clsx from "clsx";

type Prop = ViewProps & {
  style?: StyleProp<ViewStyle>;
};

export const Section: FC<Prop> = ({ children, className, ...props }) => {
  return (
    <View className={clsx("px-4", className)} {...props}>
      {children}
    </View>
  );
};
