import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Spacer } from "./spacer.component";

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search...",
}) => {
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <View className="flex-row items-center bg-card rounded-lg px-3 py-2">
      <Feather name="search" size={20} color="gray" />
      <Spacer size={2} dir="horizontal" />
      <TextInput
        className="flex-1 text-base"
        placeholder={placeholder}
        value={searchText}
        onChangeText={handleTextChange}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};
