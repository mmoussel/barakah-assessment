import { useColors } from "@/hooks/colors.hook";
import { useNavigation } from "@react-navigation/native";
import { Section } from "../shared/section.component";
import { STATUS_BAR_PADDING } from "@/constants/status-bar.constant";
import { Pressable, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const FloatingActions = () => {
  const colors = useColors();
  const { goBack } = useNavigation();

  return (
    <Section
      className="absolute top-0 right-0 w-full flex-row items-center justify-between"
      style={{
        paddingTop: STATUS_BAR_PADDING,
      }}
    >
      <Pressable
        onPress={goBack}
        className="w-10 h-10 rounded-full bg-background items-center justify-center"
      >
        <MaterialCommunityIcons
          name="chevron-left"
          size={24}
          color={colors.text}
        />
      </Pressable>

      <View className="flex-row items-center gap-x-2">
        <Pressable className="w-10 h-10 rounded-full bg-background items-center justify-center">
          <MaterialCommunityIcons name="heart" size={20} color={colors.error} />
        </Pressable>

        <Pressable className="w-10 h-10 rounded-full bg-background items-center justify-center">
          <MaterialCommunityIcons
            name="export-variant"
            size={18}
            color={colors.text}
          />
        </Pressable>
      </View>
    </Section>
  );
};
