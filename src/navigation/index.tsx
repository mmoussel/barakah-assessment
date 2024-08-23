import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@/types/navigation.type";
import { TabsStack } from "./tabs.navigation";
import { Text } from "react-native";

const Stack = createStackNavigator<RootStackParamList>();

const MockScreen = () => {
  return <Text>This Mock Screen</Text>;
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"TabsStack"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TabsStack" component={TabsStack} />
        <Stack.Screen name="Product" component={MockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
