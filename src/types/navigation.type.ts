import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabStackParamList>;
  Product: { productId: number };
};

export type TabStackParamList = {
  Home: undefined;
  Catalog: undefined;
  Cart: undefined;
  Favorite: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type TabStackNavigationProps<T extends keyof TabStackParamList> =
  CompositeScreenProps<
    StackScreenProps<TabStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
