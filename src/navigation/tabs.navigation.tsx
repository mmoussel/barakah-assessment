import React from "react";

import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/Ionicons";
import { TabStackParamList } from "@/types/navigation.type";
import { useColors } from "@/hooks/colors.hook";
import { generateIconNameByRouteName } from "@/utils/tab-bar.util";

const Tab = createBottomTabNavigator<TabStackParamList>();

const MockScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text>This Mock Screen</Text>
    </View>
  );
};

export const TabsStack = () => {
  const colors = useColors();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const iconName = generateIconNameByRouteName({
            routeName: route.name,
          });

          return (
            <Icon
              name={focused ? iconName : iconName + "-outline"}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.subtext,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={MockScreen} />
      <Tab.Screen name="Catalog" component={MockScreen} />
      <Tab.Screen
        name="Cart"
        component={MockScreen}
        options={{
          tabBarBadge: 5,
          tabBarBadgeStyle: { backgroundColor: colors.text },
        }}
      />
      <Tab.Screen name="Favorite" component={MockScreen} />
      <Tab.Screen name="Profile" component={MockScreen} />
    </Tab.Navigator>
  );
};
