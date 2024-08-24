import React from "react";

import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/Ionicons";
import { TabStackParamList } from "@/types/navigation.type";
import { useColors } from "@/hooks/colors.hook";
import { generateIconNameByRouteName } from "@/utils/tab-bar.util";
import { HomeScreen } from "@/screens/home.screen";
import { CartScreen } from "@/screens/cart.screen";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

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
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={MockScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: cartItems.length ?? undefined,
          tabBarBadgeStyle: { backgroundColor: colors.text },
        }}
      />
      <Tab.Screen name="Favorite" component={MockScreen} />
      <Tab.Screen name="Profile" component={MockScreen} />
    </Tab.Navigator>
  );
};
