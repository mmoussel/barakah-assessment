import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import clsx from "clsx";

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  layoutClassName?: string;
  labelClassName?: string;
}

export const Button: FC<ButtonProps> = ({
  fullWidth = true,
  children,
  disabled,
  isLoading,
  onPress,
  layoutClassName,
  labelClassName,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
      className={clsx(
        "bg-primary items-center justify-center p-4 rounded",
        fullWidth ? "w-full" : "",
        layoutClassName,
      )}
    >
      <Text
        className={clsx("text-background font-bold text-base", labelClassName)}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};
