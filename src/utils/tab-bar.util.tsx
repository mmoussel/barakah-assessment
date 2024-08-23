import { TabStackParamList } from "@/types/navigation.type";

export const generateIconNameByRouteName = ({
  routeName,
}: {
  routeName: keyof TabStackParamList;
}) => {
  const mapRouteToIcon = new Map<keyof TabStackParamList, any>([
    ["Home", "home"],
    ["Catalog", "search"],
    ["Cart", "bag"],
    ["Favorite", "heart"],
    ["Profile", "person-circle"],
  ]);

  return mapRouteToIcon.get(routeName);
};
