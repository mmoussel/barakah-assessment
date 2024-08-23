import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const handlePress = () => {
    onChange(!checked);
  };

  return (
    <View className="flex-row items-center">
      <TouchableOpacity onPress={handlePress} className="mr-2">
        {checked ? (
          <Ionicons name="checkbox" size={24} color="#96D1C7" />
        ) : (
          <Ionicons name="square-outline" size={24} color="#96D1C7" />
        )}
      </TouchableOpacity>
      {label && <Text className="text-sm font-bold">{label}</Text>}
    </View>
  );
};
